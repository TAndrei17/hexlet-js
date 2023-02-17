import assert from 'power-assert';
import capitalize from '../capitalize.js';

assert(capitalize('hello') === 'Hello');
assert(capitalize('') === 'Hex');

console.log('Тесты прошли!');
