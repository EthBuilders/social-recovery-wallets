import React, {Component} from 'react';
import './App.css';
import Web3 from 'web3';
import SocialRecovery from '../abis/SocialRecovery.json';
import Encryption from './Encryption';
import Rsa from './Rsa';
import Wallet from './Wallet';


 
 // Create a SHA3 hash of the message 'Apples'
//  const messageHash = web3.sha3(ack);

 // Signs the messageHash with a given account
//  const signature = await web3.eth.personal.sign(messageHash, web3.eth.defaultAccount);

 //call smart contract to pass signature for acknowledgement of receiving the snippet
 //ackSnippetForHolder()



class App extends Component{

  componentWillMount(){
    this.loadBlockchainData()
  }

  async loadBlockchainData(){
    const web3 = new Web3(window.ethereum)    
    // const network = await web3.eth.net.getNetworkType()
    const networkId = await web3.eth.net.getId()
    // const accounts = await web3.eth.getAccounts()
    const abi = SocialRecovery.abi;
    const address = SocialRecovery.networks[networkId].address
    const socialRecovery = new web3.eth.Contract(abi, address)
    // const count = await socialRecovery.methods.getCount().call()
    //console.log("web3", ethereum)
    // console.log("count", count)
    // const increase = await test.methods.increase().call()
   
    socialRecovery.events.CallingGuardian({}, function(error, event){ console.log(event); })
    .on("connected", function(subscriptionId){
        console.log(subscriptionId);
    })
    .on('data', function(event){
        console.log(event); // same results as the optional callback above
    })
    .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.

});

    // Watch for MyEvent
    // increase.MyEvent().watch((error, result) => {});
    console.log("increase",increase)
    console.log("count", count)
    
    SocialRecovery.events.Cancel({}, (error, event) => {
        dispatch(orderCancelled(event.returnValues))
        })


  }

  render(){
    return (
      <div>
        <header>Social Recovery Wallet</header>
        <p>text goes here...</p>
        <button>increase</button>
        <Wallet />
        <p>{}</p>
      </div>
    )
  }
}

export default App;
