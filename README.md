# JSBN

[![Version 1.4.0](https://img.shields.io/badge/version-1.4.0-blue.svg?style=flat)](https://github.com/timkurvers/jsbn/tree/v1.4.0)
[![Build Status](https://img.shields.io/travis/timkurvers/jsbn.svg?style=flat)](https://travis-ci.org/timkurvers/jsbn)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/timkurvers/jsbn.svg)](https://codeclimate.com/github/timkurvers/jsbn)
[![Test Coverage](https://img.shields.io/codeclimate/coverage/timkurvers/jsbn.svg)](https://codeclimate.com/github/timkurvers/jsbn)
[![Known Vulnerabilities](https://snyk.io/test/github/timkurvers/jsbn/badge.svg)](https://snyk.io/test/github/timkurvers/jsbn)

Modular package of [Tom Wu's JavaScript implementation of arbitrary-precision integer arithmetic](http://www-cs-students.stanford.edu/~tjw/jsbn/).

Licensed under the [**BSD** license](LICENSE.md).

## Features

* Modular
* Unit tested
* Node compatible
* Top-level module preventing global scope pollution in the browser
* JSHint compliance

## Installation

JSBN is available directly from GitHub:

```shell
npm install timkurvers/jsbn.git
```

## Usage & API

```javascript
const jsbn = require('jsbn');
```

### Base64

```javascript
jsbn.Base64.fromHex('4a53424e') // 'SlNCTg=='
jsbn.Base64.toHex('SlNCTg==') // '4a53424e'
jsbn.Base64.toByteArray('SlNCTg==') // [74, 83, 66, 78]
```

### Crypto

#### RC4

```javascript
const encrypter = new jsbn.Crypto.RC4();
const key = [1, 3, 3, 7];
encrypter.init(key);

const data = [1, 2, 3];
encrypter.encrypt(data);
```

#### SHA1

```javascript
jsbn.Crypto.SHA1.fromArray([97]) // [134, 247, 228, ..., 103, 184]
jsbn.Crypto.SHA1.fromString('a') // '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8'
```

##### HMAC

```javascript
jsbn.Crypto.SHA1.HMAC.fromStrings('', '') // 'fbdb1d1b18aa6c08324b7d64b71fb76370690e1d'
jsbn.Crypto.SHA1.HMAC.fromArrays([], []) // [251, 219, 29, ..., 14, 29]
```

### Math

#### BigInteger

```javascript
const a = jsbn.Math.BigInteger.fromInt(25);
const b = new jsbn.Math.BigInteger('1002', 10);

a.add(b).intValue() // 1027
```
