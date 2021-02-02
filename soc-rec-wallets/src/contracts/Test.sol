pragma solidity >=0.5.0 <0.8.0;

contract Test{
    uint private count;
    address private owner;

    // events
    event Increment();


    constructor() public{
        owner = msg.sender;
    }

    function increase() public returns (uint){
        count = count + 2;
        return count;
        emit Increment();

    }

    function decrease() public{
        count--;
    }

    function getCount() public view returns (uint){
        return count;
    }

    //receive(encrypted seedphrase) push the encrypted word into the  smart contract
    //choseHolder(number,adresses) chainlink to chose a random holder
    //sendSeedPhrase() send encrypted seedphrase to holder
    //getListHolders(adresse , order) return the person adress to the user
    //storeContactList(adresse , order, randomMasterkey) store the holder contact list on ipfs
    // encrypt(pubkey,word) general function
    // earn(holderAdress,amount) send money to aave to earn interest
    // 

    function() payable external{}
}