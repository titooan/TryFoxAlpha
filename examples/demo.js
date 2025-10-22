/**
 * TryFox Example Usage
 * Demonstrates how to use TryFox in your projects
 */

const TryFox = require('../src/index');

// Create a new TryFox instance with verbose output
const fox = new TryFox({ verbose: true });

console.log('=== TryFox Alpha Demo ===\n');

// Example 1: Simple passing test
fox.run(() => {
  const result = 2 + 2;
  if (result !== 4) {
    throw new Error(`Expected 4, got ${result}`);
  }
}, 'Basic addition test');

// Example 2: String manipulation test
fox.run(() => {
  const str = 'Hello, TryFox!';
  if (!str.includes('TryFox')) {
    throw new Error('String does not contain TryFox');
  }
}, 'String contains test');

// Example 3: Array operations test
fox.run(() => {
  const arr = [1, 2, 3, 4, 5];
  const sum = arr.reduce((a, b) => a + b, 0);
  if (sum !== 15) {
    throw new Error(`Expected sum to be 15, got ${sum}`);
  }
}, 'Array sum test');

// Example 4: A test that will fail
fox.run(() => {
  const value = null;
  if (value === undefined) {
    throw new Error('null is not undefined');
  }
}, 'Intentional failure test');

// Example 5: Object validation test
fox.run(() => {
  const obj = { name: 'TryFox', version: '0.1.0-alpha' };
  if (!obj.name || !obj.version) {
    throw new Error('Object missing required properties');
  }
}, 'Object validation test');

console.log('\n=== Demo Complete ===');
console.log('\nTryFox Info:', JSON.stringify(fox.getInfo(), null, 2));
