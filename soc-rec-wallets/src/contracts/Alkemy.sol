// gitListholder --> choseHolder --> sendHoldertouser() 
// recieveWord() --> SendWordToHolder() --> storeContactList()-
// earn()

pragma solidity >=0.5.0 <0.8.0;

contract Alkemy{

    struct Holder {
        uint sequence;
        address holderAddress;
        string publicKey;
    }

    String[] seedphrase; // seedphrase encrypted

    Holder[] holders; // potential holders 

    Holder[] randomHolders; // chosen holders

    function gitListHolder(uint _random) public returns (Holder[]){
        randomHolders.push(holders[_random]);
    }

    // chainlink 
    function choseHolder(uint _random) public returns uint{
        return _random;
    }

    // sending the holder info to the user 
    function sendHolder() public returns (Holder[]){
        return randomHolders; // sequence,holderId,publicKey
    }

    // recieve seedphrase from user
    function RecieveWord(string _seedphrase) public returns string {
        seedphrases.push(_seedphrase); //monemic phrase
    }

    // send word to holder
    function SendWord(string seedphrase) public{
       for(uint i=0; i<randomHolders.length; i++)>){
           if msg.sender == randomHolders[i].holderAddress{
               return seedphrase[i];
           }
       }
    }

    // store contact list to ipfs
    function storeContactList(randomHolders) {
        // reauest master password from user
        // store it to ipfs
    }
    
    // send fees to aave and issue a stake token
    function earn(){
        // earn interest from aave
    }


}