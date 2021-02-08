import Web3 from 'web3'
const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });


import RecoveryWallet from '../abis/RecoveryWallet.json' //check the name of it - Alkemy?

export const loadWeb3 = () => {
  const web3 = new Web3(window.ethereum)
  return web3
}

export const loadTest = async (web3, networkId, dispatch) => {
    try {
      const token = new web3.eth.Contract(Token.abi, Token.networks[networkId].address)  //when the network user currently connects to in Metadata (identified by networkId) doesn't have Token contract deployed, 
      //or in the other words, look at Token.json file, in its abi's "networks" section, specifies deployed networkid and contract's address on the network. if the current
      //returned networkId is not one of them, then .address will be exceptioned. 
      dispatch(tokenLoaded(token))
      return token
    } catch (error) {
      console.log('Token not deployed to the current network. Please select another network with Metamask.')
      return null
    }
  }

export const saveDataToIPFS = async(data) =>{
    ipfs.add(data, (err, hash) => {
        if (err){
            return console.log(err);
        }
        console.log("Hash:", hash);
    });
}

export const retreiveDataFromIPFS = async(hash) => {
    ipfs.cat(hash, (err, data) => {
    if (err) {
        console.log(err)
        return null;
    }    
    console.log('Data:', data);
});

export const sendToVault = async (web3) => {
    try {
      const token = new web3.eth.Contract(Test.abi, Test.networks[networkId].address)  
      
        const networkId = await web3.eth.net.getId()
        
        const abi = RecoveryWallet.abi;
        const address = RecoveryWallet.networks[networkId].address
        const recoveryWallet = new web3.eth.Contract(abi, address)
        const count = await recoveryWallet.methods.setContracts().call()
        console.log("count", count)
      return token
    } catch (error) {
      console.log('IPFS retrieval error')
      return null
    }
  }

}
//export default ipfs;

//const IPFS = require('ipfs-mini')
