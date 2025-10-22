/**
 * TryFox Alpha - Core Module
 * A lightweight testing and experimentation tool
 */

class TryFox {
  constructor(options = {}) {
    this.name = options.name || 'TryFox';
    this.version = '0.1.0-alpha';
    this.verbose = options.verbose || false;
  }

  /**
   * Run a test function and return results
   * @param {Function} testFn - The test function to execute
   * @param {string} description - Description of the test
   * @returns {Object} Test result with status and details
   */
  run(testFn, description = 'Test') {
    const startTime = Date.now();
    let result = {
      description,
      status: 'passed',
      error: null,
      duration: 0
    };

    try {
      testFn();
      result.status = 'passed';
    } catch (error) {
      result.status = 'failed';
      result.error = error.message;
    } finally {
      result.duration = Date.now() - startTime;
    }

    if (this.verbose) {
      this.logResult(result);
    }

    return result;
  }

  /**
   * Log test result to console
   * @param {Object} result - Test result object
   */
  logResult(result) {
    const symbol = result.status === 'passed' ? '✓' : '✗';
    const color = result.status === 'passed' ? '\x1b[32m' : '\x1b[31m';
    const reset = '\x1b[0m';
    
    console.log(`${color}${symbol}${reset} ${result.description} (${result.duration}ms)`);
    if (result.error) {
      console.log(`  Error: ${result.error}`);
    }
  }

  /**
   * Get TryFox information
   * @returns {Object} Information about TryFox instance
   */
  getInfo() {
    return {
      name: this.name,
      version: this.version,
      verbose: this.verbose
    };
  }
}

module.exports = TryFox;
