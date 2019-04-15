var assert = require('assert');

var moku = require('../dist/moku.bundle');

describe('Array', function() {
  describe('#method()', function() {
    it('should return true is function', function() {
      assert.equal(true, function() {});
    });
  });
});
