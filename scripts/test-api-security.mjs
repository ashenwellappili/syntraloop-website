#!/usr/bin/env node

/**
 * Cross-platform companion for API DAST security testing
 */

const API_URL = process.env.API_URL || 'http://localhost:3000/api/contact';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  bold: '\x1b[1m'
};

console.log(`\n${colors.bold}${colors.blue}====================================================${colors.reset}`);
console.log(`${colors.bold}${colors.blue}   SyntraLoop /api/contact DAST Security Test Suite ${colors.reset}`);
console.log(`${colors.bold}${colors.blue}   Target: ${API_URL}${colors.reset}`);
console.log(`${colors.bold}${colors.blue}====================================================${colors.reset}\n`);

let total = 0;
let passed = 0;
let failed = 0;

function assertStatus(name, expected, actual, body) {
  total++;
  if (actual === expected) {
    console.log(`  ${colors.green}✔ [PASS]${colors.reset} ${name} (HTTP ${actual})`);
    passed++;
  } else {
    console.log(`  ${colors.red}✖ [FAIL]${colors.reset} ${name}`);
    console.log(`    Expected: HTTP ${expected}, Got: HTTP ${actual}`);
    console.log(`    Response: ${JSON.stringify(body)}`);
    failed++;
  }
}

async function run() {
  // Case 1: Empty Payload
  console.log(`${colors.bold}▶ Case 1: Empty Payload Validation${colors.reset}`);
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
    const body = await res.json().catch(() => ({}));
    assertStatus('Empty JSON payload rejected', 400, res.status, body);
  } catch (err) {
    console.log(`  ${colors.red}✖ [FAIL] Unable to connect to server at ${API_URL}. Is dev server running?${colors.reset}`);
    process.exit(1);
  }

  // Case 2: Malformed Email
  console.log(`\n${colors.bold}▶ Case 2: Malformed Email Syntax Validation${colors.reset}`);
  {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@@domain', message: 'Valid security test message' })
    });
    const body = await res.json().catch(() => ({}));
    assertStatus("Malformed email 'test@@domain' rejected", 400, res.status, body);
  }

  // Case 3: Blocked file extensions (.exe, .sh, .bat, .php)
  console.log(`\n${colors.bold}▶ Case 3: Blocked Malicious File Extensions${colors.reset}`);
  const dangerousExts = ['test_payload.exe', 'test_payload.sh', 'test_payload.bat', 'test_payload.php'];

  for (const filename of dangerousExts) {
    const formData = new FormData();
    formData.append('firstName', 'SecurityTester');
    formData.append('email', 'security-audit@example.com');
    formData.append('service', 'Security Audit');
    formData.append('message', 'Automated payload verification test');
    formData.append('file', new Blob(['fake payload'], { type: 'application/octet-stream' }), filename);

    const res = await fetch(API_URL, { method: 'POST', body: formData });
    const body = await res.json().catch(() => ({}));
    assertStatus(`Blocked extension upload rejected (${filename})`, 400, res.status, body);
  }

  // Case 4: Rate Limiting Flood (9th request triggers HTTP 429)
  console.log(`\n${colors.bold}▶ Case 4: Rate Limiter Flood Protection (Max 8 req / 15 min)${colors.reset}`);
  let rateLimitHit = false;
  for (let i = 1; i <= 9; i++) {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'rate-limit-test@example.com', message: 'Rate limit test window' })
    });
    if (res.status === 429) {
      console.log(`  ${colors.yellow}ℹ Request #${i} received HTTP 429 Too Many Requests${colors.reset}`);
      rateLimitHit = true;
      break;
    }
  }

  total++;
  if (rateLimitHit) {
    console.log(`  ${colors.green}✔ [PASS]${colors.reset} Anti-abuse rate limiter successfully triggered HTTP 429`);
    passed++;
  } else {
    console.log(`  ${colors.red}✖ [FAIL]${colors.reset} Rate limiter did not return HTTP 429 within 9 requests`);
    failed++;
  }

  console.log('\n----------------------------------------------------');
  console.log(`Total Checks: ${total} | ${colors.green}Passed: ${passed}${colors.reset} | ${colors.red}Failed: ${failed}${colors.reset}`);
  console.log('----------------------------------------------------\n');

  if (failed === 0) {
    console.log(`${colors.green}${colors.bold}✅ ALL API SECURITY ASSERTIONS PASSED.${colors.reset}\n`);
    process.exit(0);
  } else {
    console.log(`${colors.red}${colors.bold}❌ SOME API SECURITY ASSERTIONS FAILED.${colors.reset}\n`);
    process.exit(1);
  }
}

run();
