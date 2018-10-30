const Wallet = require('ethereumjs-wallet');
const keccak256=require('js-sha3').keccak256;
let wallet=Wallet.generate();

let privKeyString = keccak256(wallet.getPrivateKey());
let pubKeyString = keccak256(wallet.getPublicKeyString());
console.log("private key with hex string:", privKeyString);
console.log("public key with hex string", pubKeyString);

