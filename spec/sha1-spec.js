helper = require('./spec-helper');
expect = helper.expect;

describe('SHA-1', function() {

  var sha1 = require('../lib/sha1');
  var hmac = require('../lib/sha1').HMAC;

  it('can calculate digests from strings', function() {
    expect(sha1.fromString('')).to.eq('da39a3ee5e6b4b0d3255bfef95601890afd80709');
    expect(sha1.fromString('a')).to.eq('86f7e437faa5a7fce15d1ddcb9eaeaea377667b8');
    expect(sha1.fromString('abc')).to.eq('a9993e364706816aba3e25717850c26c9cd0d89d');
    expect(sha1.fromString('abcdefghijklmnopqrstuvwxyz')).to.eq('32d10c7b8cf96570ca04ce37f2a19d84240d3a89');
  });

  xit('can calculate digests from byte-arrays', function() {
    expect(sha1.fromArray([])).to.eq([218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]);
    expect(sha1.fromArray([97])).to.eq([134, 247, 228, 55, 250, 165, 167, 252, 225, 93, 29, 220, 185, 234, 234, 234, 55, 118, 103, 184]);
    expect(sha1.fromArray([97, 98, 99])).to.eq([169, 153, 62, 54, 71, 6, 129, 106, 186, 62, 37, 113, 120, 80, 194, 108, 156, 208, 216, 157]);
  });

  it('can calculate HMAC digests from strings', function() {
    expect(hmac.fromStrings('', '')).to.eq('fbdb1d1b18aa6c08324b7d64b71fb76370690e1d');
    expect(hmac.fromStrings('key', 'The quick brown fox jumps over the lazy dog')).to.eq('de7c9b85b8b78aa6bc8a7a36f70a90701c9db4d9');
  });

  xit('can calculate HMAC digests from byte-arrays', function() {
    expect(hmac.fromArrays([], [])).to.eq([251, 219, 29, 27, 24, 170, 108, 8, 50, 75, 125, 100, 183, 31, 183, 99, 112, 105, 14, 29]);
    expect(hmac.fromArrays(
      [107, 101, 121],
      [84, 104, 101, 32, 113, 117, 105, 99, 107, 32, 98, 114, 111, 119, 110, 32, 102, 111, 120, 32, 106, 117, 109, 112, 115, 32, 111, 118, 101, 114, 32, 116, 104, 101, 32, 108, 97, 122, 121, 32, 100, 111, 103]
    )).to.eq([222, 124, 155, 133, 184, 183, 138, 166, 188, 138, 122, 54, 247, 10, 144, 112, 28, 157, 180, 217]);
  });

});
