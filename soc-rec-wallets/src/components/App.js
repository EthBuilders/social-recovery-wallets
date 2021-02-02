import React, {Component} from 'react';
import './App.css';
import Web3 from 'web3';
import Test from '../abis/Test.json';
import Encryption from './Encryption';
import Rsa from './Rsa';
import Wallet from './Wallet';


class App extends Component{
  componentWillMount(){
    this.loadBlockchainData()
  }

  async loadBlockchainData(){
    const web3 = new Web3(window.ethereum)    
    // const network = await web3.eth.net.getNetworkType()
    const networkId = await web3.eth.net.getId()
    // const accounts = await web3.eth.getAccounts()
    const abi = Test.abi;
    const address = Test.networks[networkId].address
    const test = new web3.eth.Contract(abi, address)
    const count = await test.methods.getCount().call()
    //console.log("web3", ethereum)
    console.log("count", count)
    const increase = await test.methods.increase().call()
    await test.events.Increment({}, (error, event) => {
      console.log("event:",event.returnValues)
    })
    // Watch for MyEvent
    // increase.MyEvent().watch((error, result) => {});
    console.log("increase",increase)
    console.log("count", count)
    

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
