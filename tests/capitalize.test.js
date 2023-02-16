import assert from 'power-assert';
import capitalize from '../capitalize.js';

assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');
