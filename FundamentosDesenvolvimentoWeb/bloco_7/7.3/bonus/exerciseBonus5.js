const verify = require('./password-verification');
const assert = require('assert');

assert.strictEqual(typeof verify, 'function');

function verify(password) {}

module.exports = verify;

const verify = require('./password-verification');
const assert = require('assert');

assert.strictEqual(typeof verify, 'function');
// Password should be larger than 8 chars
assert(!verify('12345678'));