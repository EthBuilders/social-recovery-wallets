import './App.css';
import React from 'react';
import { ethers } from 'ethers';



function Wallet() {
    // const mnemonic = "witch collapse practice feed shame open despair creek road again ice least"
     // Import the wallet
    const Wallet = require('ethereumjs-wallet')
    const hdkey = require('ethereumjs-wallet/hdkey')
    const BIP39 = require("bip39")
    const keccak256 = require('js-sha3').keccak256;


    var mnemonic = BIP39.generateMnemonic()
    console.log(mnemonic)
    var isValid = BIP39.validateMnemonic(mnemonic)
    console.log(isValid)

    function generateHexSeed(mnemonic){
        return BIP39.mnemonicToSeed(mnemonic)
    }

    function generatePrivKey(mnemonic){
        const seed = generateHexSeed(mnemonic)
        return hdkey.fromMasterSeed(seed).derivePath(`m/44'/60'/0'/0`).getWallet().getPrivateKey()
    }
    var privKey = generatePrivKey(mnemonic)
    console.log("privKey", privKey)


    // Derive the public key from the private key
    function derivePubKey(privKey){
        const wallet = Wallet.fromPrivateKey(privKey)    
        return wallet.getPublicKey()
    }
    // var pubkey = derivePubKey()
    // console.log("pubkey", pubkey)
    function deriveEthAddress(pubKey){
    const address = keccak256(pubKey) // keccak256 hash of  publicKey
    // Get the last 20 bytes of the public key
    return "0x" + address.substring(address.length - 40, address.length)    
}

    // Import the ethereumjs transaction library
    const EthereumTx = require('ethereumjs-tx')


    // Add the following function to enable transaction signing
    function signTx(privKey, txData){
        const tx = new EthereumTx(txData)
        tx.sign(privKey)
        return tx
    }
    function getSignerAddress(signedTx){
        return "0x" + signedTx.getSenderAddress().toString('hex')
    }

 
    return (
        <div className="App">
          <header className="App-header">
            <div>My wallet</div>
            <div> private key:{privKey}</div>
          </header>
        </div>
      );
    
}

export default Wallet;