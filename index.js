// import Elliptic from "https://esm.sh/elliptic";
import Elliptic from 'https://cdn.skypack.dev/elliptic@v6.5.4';

var ec = new Elliptic.ec('curve25519');

// Generate keys
var key1 = ec.genKeyPair();
var key2 = ec.genKeyPair();

var shared1 = key1.derive(key2.getPublic());
var shared2 = key2.derive(key1.getPublic());

console.log('Both shared secrets are BN instances');
console.log(shared1.toString(16));
console.log(shared2.toString(16));
