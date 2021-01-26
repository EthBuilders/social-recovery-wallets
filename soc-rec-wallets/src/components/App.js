import React, {Component} from 'react';
import './App.css';
import Web3 from 'web3';
import Test from '../abis/Test.json';

class App extends Component{
  componentWillMount(){
    this.loadBlockchainData()
  }

  async loadBlockchainData(){
    const web3 = new Web3(window.ethereum)    
    const network = await web3.eth.net.getNetworkType()
    const networkId = await web3.eth.net.getId()
    const accounts = await web3.eth.getAccounts()
    const abi = Test.abi;
    const address = Test.networks[networkId].address
    const test = new web3.eth.Contract(abi, address)
    const count = await test.methods.getCount().call()
    //console.log("web3", ethereum)
    console.log("count", count)
  }

  render(){
    return (
      <div>
        <header>Social Recovery Wallet</header>
        <p>text goes here...</p>
      </div>
    )
  }
}

export default App;
