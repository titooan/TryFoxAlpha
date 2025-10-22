# TryFox Alpha

> A lightweight testing and experimentation tool for Node.js

**Version:** 0.1.0-alpha  
**Status:** Alpha Release  
**For internal usage only**

## Overview

TryFox is a simple, minimal testing framework designed for quick experimentation and lightweight testing scenarios. It provides a straightforward API for running tests and capturing results.

## Features

- ✨ Simple and intuitive API
- 🚀 Lightweight with zero dependencies
- 📊 Detailed test result tracking
- 🎨 Colorful console output
- ⚡ Fast execution
- 🔧 CLI interface

## Installation

```bash
# Clone the repository
git clone https://github.com/titooan/TryFoxAlpha.git
cd TryFoxAlpha

# No additional dependencies needed!
```

## Usage

### Programmatic API

```javascript
const TryFox = require('./src/index');

// Create a new TryFox instance
const fox = new TryFox({ verbose: true });

// Run a test
fox.run(() => {
  const result = 2 + 2;
  if (result !== 4) {
    throw new Error('Math is broken!');
  }
}, 'Simple math test');

// Get instance information
console.log(fox.getInfo());
```

### Command Line Interface

```bash
# Make CLI executable
chmod +x src/cli.js

# Show help
node src/cli.js --help

# Show version
node src/cli.js --version

# Show instance info
node src/cli.js --info
```

## Running Tests

```bash
npm test
```

## Running Examples

```bash
node examples/demo.js
```

## API Reference

### `new TryFox(options)`

Creates a new TryFox instance.

**Options:**
- `name` (string): Custom name for the instance (default: 'TryFox')
- `verbose` (boolean): Enable verbose output (default: false)

### `fox.run(testFn, description)`

Runs a test function and returns the result.

**Parameters:**
- `testFn` (Function): The test function to execute
- `description` (string): Description of the test (default: 'Test')

**Returns:** Object with:
- `description`: Test description
- `status`: 'passed' or 'failed'
- `error`: Error message if failed, null otherwise
- `duration`: Execution time in milliseconds

### `fox.getInfo()`

Returns information about the TryFox instance.

**Returns:** Object with:
- `name`: Instance name
- `version`: TryFox version
- `verbose`: Verbose setting

## Project Structure

```
TryFoxAlpha/
├── src/
│   ├── index.js      # Core TryFox module
│   └── cli.js        # Command-line interface
├── test/
│   └── test.js       # Test suite
├── examples/
│   └── demo.js       # Usage examples
├── package.json      # Project metadata
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Development Status

This is an **alpha release** intended for internal testing and feedback. The API may change in future versions.

## License

MIT
