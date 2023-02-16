import { strict as assert } from 'node:assert';
import capitalize from '../capitalize.js';

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');
