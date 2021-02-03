import './App.css';
import React from 'react';
// import { RSA } from 'react-native-rsa-native';



function Rsa() {
   
var RSAKey = require('react-native-rsa');
const bits = 1024;
const exponent = '10001'; // must be a string
var rsa = new RSAKey();
var r = rsa.generate(bits, exponent);
console.log("RSA",rsa)

var publicKey = rsa.getPublicString(); // return json encoded string
console.log("PublicKey",publicKey)

var privateKey = rsa.getPrivateString(); // return json encoded string
console.log("PrivateKey",privateKey)

rsa.setPublicString(publicKey);
var originText = 'sample String Value';
var encrypted = rsa.encrypt(originText);
console.log("encrypted",encrypted)

//decrypt
rsa.setPrivateString(privateKey);
var decrypted = rsa.decrypt(encrypted); // decrypted == originText
console.log("decrypted",decrypted)

return (
    <div className="App">
      <header className="App-header">
        <div>Encrypt Data with rsa</div>
        {/* <div>
          {decryptedData.map(function (object) {
            //console.log(object)
          })}
        </div> */}
      </header>
    </div>
  );
    
}

export default Rsa;