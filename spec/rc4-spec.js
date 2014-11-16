helper = require('./spec-helper');
expect = helper.expect;

describe('RC4', function() {

  var rc4 = require('../lib/rc4');

  it('encrypts/decrypts data', function() {
    var encrypter = new rc4();
    var decrypter = new rc4();

    var key = [1, 3, 3, 7];

    encrypter.init(key);
    decrypter.init(key);

    var data = [1, 2, 3];
    encrypter.encrypt(data);

    expect(data).not.to.deep.equal([1, 2, 3]);

    decrypter.decrypt(data);

    expect(data).to.deep.equal([1, 2, 3]);
  });

});
