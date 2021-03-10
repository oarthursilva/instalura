const shell = require('shelljs');

const result = shell.exec('git diff --name-only feature/style-form..main', { silent: true });

console.log(result.stdout.split('\n').filter((data) => data.length));
