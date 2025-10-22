/**
 * TryFox Test Suite
 * Basic tests for TryFox functionality
 */

const TryFox = require('../src/index');

function testTryFoxCreation() {
  const fox = new TryFox();
  if (!fox) {
    throw new Error('Failed to create TryFox instance');
  }
  if (fox.version !== '0.1.0-alpha') {
    throw new Error('Version mismatch');
  }
}

function testTryFoxRun() {
  const fox = new TryFox({ verbose: false });
  const result = fox.run(() => {
    if (1 + 1 !== 2) {
      throw new Error('Math is broken!');
    }
  }, 'Simple math test');

  if (result.status !== 'passed') {
    throw new Error('Test should have passed');
  }
}

function testTryFoxFailure() {
  const fox = new TryFox({ verbose: false });
  const result = fox.run(() => {
    throw new Error('Expected failure');
  }, 'Failure test');

  if (result.status !== 'failed') {
    throw new Error('Test should have failed');
  }
  if (!result.error) {
    throw new Error('Error message should be captured');
  }
}

function testGetInfo() {
  const fox = new TryFox({ name: 'TestFox', verbose: true });
  const info = fox.getInfo();
  
  if (info.name !== 'TestFox') {
    throw new Error('Name mismatch');
  }
  if (!info.verbose) {
    throw new Error('Verbose should be true');
  }
}

function runTests() {
  const tests = [
    { fn: testTryFoxCreation, name: 'TryFox Creation' },
    { fn: testTryFoxRun, name: 'TryFox Run Success' },
    { fn: testTryFoxFailure, name: 'TryFox Run Failure' },
    { fn: testGetInfo, name: 'Get Info' }
  ];

  let passed = 0;
  let failed = 0;

  console.log('Running TryFox Tests...\n');

  tests.forEach(test => {
    try {
      test.fn();
      console.log(`✓ ${test.name}`);
      passed++;
    } catch (error) {
      console.log(`✗ ${test.name}`);
      console.log(`  Error: ${error.message}`);
      failed++;
    }
  });

  console.log(`\nResults: ${passed} passed, ${failed} failed`);
  
  if (failed > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  runTests();
}

module.exports = { runTests };
