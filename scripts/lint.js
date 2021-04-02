/* eslint-disable no-console */
/* eslint-disable-next-line import/no-extraneous-dependencies */
const shelljs = require('shelljs');

const currentBranch = shelljs.exec('git branch --show-current', { silent: true });
const result = shelljs.exec(`git diff --name-only ${currentBranch}..main`, { silent: true });

console.log(result.stdout.split('\n').filter((data) => data.length));
