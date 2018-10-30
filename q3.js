const Wallet = require('ethereumjs-wallet');
const keccak256 = require('js-sha3').keccak256;
const wallet = Wallet.generate();

const privKey = wallet.getPrivateKey();
const pubKey = wallet.getPublicKey();

let wallet2 = Wallet.fromPrivateKey(privKey);
let KeyStore = wallet2.toV3String('nccu');
console.log(KeyStore);

