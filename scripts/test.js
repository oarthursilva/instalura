/* eslint-disable no-console */
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { exec } from 'shelljs';

const result = exec('git diff --name-only feature/style-form..main', { silent: true });

console.log(result.stdout.split('\n').filter((data) => data.length));
