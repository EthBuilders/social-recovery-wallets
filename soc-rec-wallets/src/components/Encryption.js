import './App.css';
import React from 'react';
// import Tweet from './Tweet.js'
// import { NativeModules, Platform } from 'react-native';
// import AesCrypto from 'react-native-aes-kit';


//   const[users,SetUsers] = useState([
//     {name:'Ed',message:'hello there'},
//     {name:'Med',message:'okey man'},
//     {name:'Momo',message:'its just me momo'}
//     ])
  

//   return (
//   <div className="App" >
//     {users.map(user =>(
//       <Tweet name={user.name} message={user.message} />
//     ))}
//   </div>
//   )
// }

// function App() {

// return(
//   <div>
//     <h1>My APP</h1>
//     <Encryption />
//   </div>
// )
// }

// export default App;


function Encryption() {

  // split seedphrase hard coded
  //add rsa encryption keys and function
  // encryption aes
  // send the one word to the smart contrct

  var CryptoJS = require("crypto-js");

  var seedphrase = [ "witch","collapse","practice","feed","shame","open","despair","creek","road","again","ice","least"]

  // seedphrase before encryption
  var data = [{ id: 0, seedphrase: seedphrase[0] }];
  console.log("data before encryption: ",JSON.stringify(data));

  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'my-secret-key@123456789123456789').toString();


  //log encrypted data
  console.log("Encrypt Data",ciphertext);

  // Decrypt
  var bytes = CryptoJS.AES.decrypt(ciphertext, 'my-secret-key@123456789123456789');
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  
  //log decrypted Data
  console.log("decrypted Data: ",JSON.stringify(decryptedData));

  return (
    <div className="App">
      <header className="App-header">
        <div>Encrypt Data -{ciphertext}</div>
        {/* <div>
          {decryptedData.map(function (object) {
            //console.log(object)
          })}
        </div> */}
      </header>
    </div>
  );
}

export default Encryption;
