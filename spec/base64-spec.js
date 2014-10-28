helper = require('./spec-helper');
expect = helper.expect;

describe('Base64', function() {

  var base64 = require('../lib/base64');

  it('can be generated from hex', function() {
    expect(base64.fromHex('4a53424e')).to.eq('SlNCTg==');
  });

  it('can be converted to hex', function() {
    expect(base64.toHex('SlNCTg==')).to.eq('4a53424e');
  });

  it('can be converted to byte-array', function() {
    expect(base64.toByteArray('SlNCTg==')).to.deep.eq([74, 83, 66, 78]);
  });

});
