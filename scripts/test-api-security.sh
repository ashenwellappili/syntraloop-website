#!/usr/bin/env bash

# ==============================================================================
# SyntraLoop /api/contact Automated DAST Security Test Suite
# Tests:
#   Case 1: Empty payload -> asserts HTTP 400
#   Case 2: Malformed email -> asserts HTTP 400
#   Case 3: Blocked file extensions (.exe, .sh, .bat, .php) -> asserts HTTP 400
#   Case 4: Rapid flooding requests in loop -> asserts HTTP 429 Too Many Requests
# ==============================================================================

BASE_URL="${API_URL:-http://localhost:3000/api/contact}"

GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
NC='\033[0m' # No Color

TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

echo -e "\n${BOLD}${BLUE}====================================================${NC}"
echo -e "${BOLD}${BLUE}   SyntraLoop /api/contact DAST Security Test Suite ${NC}"
echo -e "${BOLD}${BLUE}   Target: ${BASE_URL}${NC}"
echo -e "${BOLD}${BLUE}====================================================${NC}\n"

# Helper to assert HTTP status code
assert_status() {
  local test_name="$1"
  local expected_status="$2"
  local actual_status="$3"
  local response_body="$4"

  TOTAL_TESTS=$((TOTAL_TESTS + 1))
  if [ "$actual_status" -eq "$expected_status" ]; then
    echo -e "  ${GREEN}✔ [PASS]${NC} ${test_name} (HTTP ${actual_status})"
    PASSED_TESTS=$((PASSED_TESTS + 1))
  else
    echo -e "  ${RED}✖ [FAIL]${NC} ${test_name}"
    echo -e "    Expected: HTTP ${expected_status}, Got: HTTP ${actual_status}"
    echo -e "    Response: ${response_body}"
    FAILED_TESTS=$((FAILED_TESTS + 1))
  fi
}

# ------------------------------------------------------------------------------
# Case 1: Empty Payload
# ------------------------------------------------------------------------------
echo -e "${BOLD}▶ Case 1: Empty Payload Validation${NC}"
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL" \
  -H "Content-Type: application/json" \
  -d '{}')
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

assert_status "Empty JSON payload rejected" 400 "$HTTP_CODE" "$BODY"

# ------------------------------------------------------------------------------
# Case 2: Malformed Email
# ------------------------------------------------------------------------------
echo -e "\n${BOLD}▶ Case 2: Malformed Email Syntax Validation${NC}"
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL" \
  -H "Content-Type: application/json" \
  -d '{"email": "test@@domain", "message": "Valid security test message content"}')
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

assert_status "Malformed email 'test@@domain' rejected" 400 "$HTTP_CODE" "$BODY"

# ------------------------------------------------------------------------------
# Case 3: Blocked File Extensions (.exe, .sh, .bat, .php)
# ------------------------------------------------------------------------------
echo -e "\n${BOLD}▶ Case 3: Blocked Malicious File Extensions${NC}"

DANGEROUS_EXTS=("test_payload.exe" "test_payload.sh" "test_payload.bat" "test_payload.php")

for FILE_NAME in "${DANGEROUS_EXTS[@]}"; do
  # Create temporary dummy file
  echo "dummy malicious payload" > "$FILE_NAME"

  RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL" \
    -F "firstName=SecurityTester" \
    -F "email=security-audit@example.com" \
    -F "service=Security Audit" \
    -F "message=Automated payload verification test" \
    -F "file=@${FILE_NAME}")
  
  HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
  BODY=$(echo "$RESPONSE" | sed '$d')

  rm -f "$FILE_NAME"

  assert_status "Blocked extension upload rejected (${FILE_NAME})" 400 "$HTTP_CODE" "$BODY"
done

# ------------------------------------------------------------------------------
# Case 4: Rate Limiting Flood (9th Request triggers HTTP 429)
# ------------------------------------------------------------------------------
echo -e "\n${BOLD}▶ Case 4: Rate Limiter Flood Protection (Max 8 req / 15 min)${NC}"

# We send requests in rapid succession until hitting limit
RATE_LIMIT_TRIGGERED=0
for i in {1..9}; do
  RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$BASE_URL" \
    -H "Content-Type: application/json" \
    -d '{"email": "rate-limit-test@example.com", "message": "Checking rate limit window"}')
  HTTP_CODE=$(echo "$RESPONSE" | tail -n1)

  if [ "$HTTP_CODE" -eq 429 ]; then
    echo -e "  ${YELLOW}ℹ Request #${i} received HTTP 429 Too Many Requests${NC}"
    RATE_LIMIT_TRIGGERED=1
    break
  fi
done

TOTAL_TESTS=$((TOTAL_TESTS + 1))
if [ "$RATE_LIMIT_TRIGGERED" -eq 1 ]; then
  echo -e "  ${GREEN}✔ [PASS]${NC} Anti-abuse rate limiter successfully triggered HTTP 429 on rapid requests"
  PASSED_TESTS=$((PASSED_TESTS + 1))
else
  echo -e "  ${RED}✖ [FAIL]${NC} Rate limiter did not return HTTP 429 within 9 rapid requests"
  FAILED_TESTS=$((FAILED_TESTS + 1))
fi

# ------------------------------------------------------------------------------
# Summary
# ------------------------------------------------------------------------------
echo -e "\n----------------------------------------------------"
echo -e "Total Checks: ${TOTAL_TESTS} | ${GREEN}Passed: ${PASSED_TESTS}${NC} | ${RED}Failed: ${FAILED_TESTS}${NC}"
echo -e "----------------------------------------------------\n"

if [ "$FAILED_TESTS" -eq 0 ]; then
  echo -e "${GREEN}${BOLD}✅ ALL API SECURITY ASSERTIONS PASSED.${NC}\n"
  exit 0
else
  echo -e "${RED}${BOLD}❌ SOME API SECURITY ASSERTIONS FAILED.${NC}\n"
  exit 1
fi
