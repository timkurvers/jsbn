# Changelog

### v1.4 - July 1, 2013

- Fixed variable name collision between sha1.js and base64.js.
- Obtain entropy from window.crypto.getRandomValues where available.
- Added ECCurveFp.encodePointHex.
- Fixed inconsistent use of DV in jsbn.js.


### v1.3 - July 3, 2012

- Fixed bug when comparing negative integers of different word lengths.


### v1.2 - March 29, 2011

- Added square method to improve ECC performance.
- Use randomized bases in isProbablePrime.


### v1.1 - September 15, 2009

- Added support for utf-8 encoding of non-ASCII characters when PKCS1 encoding and decoding JavaScript strings.
- Fixed bug when creating a new BigInteger("0") in a non power-of-2 radix.
