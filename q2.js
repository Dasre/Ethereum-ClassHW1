const Wallet = require('ethereumjs-wallet');
const keccak256=require('js-sha3').keccak256;
let wallet=Wallet.generate();
const pubKey = wallet.getPublicKey();
let public_key_hash = keccak256(pubKey);
console.log("public_key_hash:",public_key_hash);
let x = public_key_hash.slice(-40);
let account_address = "0x"+x;
console.log("Account_address:", account_address);