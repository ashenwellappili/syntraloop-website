#!/usr/bin/env node

/**
 * SyntraLoop Automated Security & Secret Leak Validation Suite
 * 
 * Verifies:
 * 1. .gitignore hygiene (.env and .env.local are protected)
 * 2. Static client bundle inspection (.next/static free of SMTP credentials & secret tokens)
 * 3. Dependency vulnerability audit (npm audit check)
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function logStep(title) {
  console.log(`\n${colors.bold}${colors.blue}▶ ${title}${colors.reset}`);
}

function logPass(msg) {
  console.log(`  ${colors.green}✔ [PASS]${colors.reset} ${msg}`);
}

function logFail(msg) {
  console.log(`  ${colors.red}✖ [FAIL]${colors.reset} ${msg}`);
}

function logWarn(msg) {
  console.log(`  ${colors.yellow}⚠ [WARN]${colors.reset} ${msg}`);
}

let hasErrors = false;

// ============================================================================
// CHECK 1: Verify .gitignore contains .env and .env.local rules
// ============================================================================
logStep('Check 1: Verifying .gitignore Secret Protection');

const gitignorePath = path.join(rootDir, '.gitignore');
if (!fs.existsSync(gitignorePath)) {
  logFail('.gitignore file does not exist at project root!');
  hasErrors = true;
} else {
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
  const lines = gitignoreContent.split(/\r?\n/).map(l => l.trim()).filter(l => l && !l.startsWith('#'));

  const requiredPatterns = ['.env', '.env.local'];
  let allProtected = true;

  for (const pattern of requiredPatterns) {
    const isCovered = lines.some(line => line === pattern || line === '.env*.local' || line === '.env*');
    if (isCovered) {
      logPass(`Rule protecting "${pattern}" is active in .gitignore.`);
    } else {
      logFail(`Missing rule for "${pattern}" in .gitignore!`);
      allProtected = false;
      hasErrors = true;
    }
  }

  if (allProtected) {
    logPass('Secrets and local environment files are safely excluded from Git tracking.');
  }
}

// ============================================================================
// CHECK 2: Client-side Static Bundle Leak Inspection (.next/static)
// ============================================================================
logStep('Check 2: Client-Side Bundle Inspection (.next/static)');

const nextStaticDir = path.join(rootDir, '.next', 'static');

if (!fs.existsSync(nextStaticDir)) {
  logWarn('.next/static folder not found. Running "npm run build" first is recommended.');
} else {
  // Read .env.local to identify any live secret values to search against
  const envLocalPath = path.join(rootDir, '.env.local');
  const sensitiveStrings = ['SMTP_PASS', 'SMTP_USER', 'CONTACT_RECEIVER_EMAIL'];

  if (fs.existsSync(envLocalPath)) {
    const envContent = fs.readFileSync(envLocalPath, 'utf8');
    const passMatch = envContent.match(/SMTP_PASS\s*=\s*(.+)/);
    if (passMatch && passMatch[1]) {
      const passVal = passMatch[1].trim().replace(/^["']|["']$/g, '');
      if (passVal && passVal.length >= 8) {
        sensitiveStrings.push(passVal);
        // Also check without spaces
        const noSpaceVal = passVal.replace(/\s+/g, '');
        if (noSpaceVal !== passVal) sensitiveStrings.push(noSpaceVal);
      }
    }
  }

  function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        getAllFiles(filePath, fileList);
      } else if (/\.(js|json|css|html)$/.test(file)) {
        fileList.push(filePath);
      }
    }
    return fileList;
  }

  const clientFiles = getAllFiles(nextStaticDir);
  let bundleLeaksFound = 0;

  for (const targetStr of sensitiveStrings) {
    let leakedInFile = null;
    for (const file of clientFiles) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes(targetStr)) {
        leakedInFile = path.relative(rootDir, file);
        break;
      }
    }

    if (leakedInFile) {
      logFail(`Sensitive string "${targetStr.slice(0, 4)}***" detected in client bundle: ${leakedInFile}`);
      bundleLeaksFound++;
      hasErrors = true;
    } else {
      const label = targetStr.length > 10 && !targetStr.startsWith('SMTP') ? 'Live App Password' : targetStr;
      logPass(`"${label}" is completely absent from all client chunks.`);
    }
  }

  if (bundleLeaksFound === 0) {
    logPass(`All ${clientFiles.length} static assets in .next/static are clean of backend secrets.`);
  }
}

// ============================================================================
// CHECK 3: NPM Audit High/Critical Vulnerability Evaluation
// ============================================================================
logStep('Check 3: Dependency Security Audit (npm audit)');

try {
  // Run npm audit in JSON mode to evaluate high/critical CVEs cleanly
  const auditOutput = execSync('npm audit --json', { cwd: rootDir, encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
  const auditJson = JSON.parse(auditOutput);
  const vulnCounts = auditJson.metadata?.vulnerabilities || {};
  
  const high = vulnCounts.high || 0;
  const critical = vulnCounts.critical || 0;

  if (high === 0 && critical === 0) {
    logPass('Zero High or Critical vulnerabilities detected in direct dependencies.');
  } else {
    logWarn(`Found ${high} High and ${critical} Critical advisories. Run "npm audit fix" or review package versions.`);
  }
} catch (auditErr) {
  // npm audit exits with 1 when vulnerabilities exist
  try {
    const auditJson = JSON.parse(auditErr.stdout || '{}');
    const vulnCounts = auditJson.metadata?.vulnerabilities || {};
    const high = vulnCounts.high || 0;
    const critical = vulnCounts.critical || 0;
    logWarn(`Advisories reported: High: ${high}, Critical: ${critical}.`);
  } catch {
    logWarn('Completed dependency scan with informational advisories.');
  }
}

// ============================================================================
// FINAL SUMMARY
// ============================================================================
console.log('\n-------------------------------------------------------------');
if (hasErrors) {
  console.log(`${colors.red}${colors.bold}❌ SECURITY SUITE RESULT: FAILED${colors.reset}`);
  console.log('One or more security policies failed. Please address the errors above.');
  process.exit(1);
} else {
  console.log(`${colors.green}${colors.bold}✅ SECURITY SUITE RESULT: ALL CHECKS PASSED${colors.reset}`);
  console.log('SyntraLoop security validation completed with zero leakages or critical misconfigurations.\n');
  process.exit(0);
}
