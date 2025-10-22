#!/usr/bin/env node

/**
 * TryFox CLI
 * Command-line interface for TryFox
 */

const TryFox = require('./index');

function showHelp() {
  console.log(`
TryFox Alpha v0.1.0
A lightweight testing and experimentation tool

Usage:
  tryfox [options]

Options:
  -h, --help     Show this help message
  -v, --version  Show version information
  -i, --info     Show TryFox instance information

Examples:
  tryfox --help
  tryfox --version
  tryfox --info
`);
}

function showVersion() {
  console.log('TryFox Alpha v0.1.0');
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    showHelp();
    return;
  }

  if (args.includes('-v') || args.includes('--version')) {
    showVersion();
    return;
  }

  if (args.includes('-i') || args.includes('--info')) {
    const fox = new TryFox({ verbose: true });
    console.log(JSON.stringify(fox.getInfo(), null, 2));
    return;
  }

  console.log('TryFox Alpha initialized successfully!');
  console.log('For more information, run: tryfox --help');
}

if (require.main === module) {
  main();
}

module.exports = { main };
