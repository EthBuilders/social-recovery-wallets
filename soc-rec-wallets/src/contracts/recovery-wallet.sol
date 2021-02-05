// gitLis Guardian --> chos Guardian --> sen Guardiantouser() 
// recieveWord() --> SendWordT Guardian() --> storeContactList()-
// earn()

pragma solidity >=0.5.0 <0.8.0;

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@chainlink/contracts/src/v0.6/VRFConsumerBase.sol";
// import "recovery-wallet.sol";

/// @title Social Recovery Wallet Smart Contract 
/// @author Mohammed El Amine Idmoussi / Yuling Ma 

contract Alkemy{

    struct Guardian {
        uint sequence;
        address guardianAddress;
        string publicKey;
        bool ack;
    }

    String[] seedphrase; // seedphrase encrypted

    Guardian[] guardians; // potential guardians 

    Guardian[] randomGuardians; // chosen guardians

    address userAddress;


// #################################################################

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


// #################################################################


    //invite guardians to participate protect password
    function sendInvitation(Guardian[] _guardians) public{
        
    }

    function ackInvitation() public isUnAckGuardian{
        for (uint i=0; i<guardians.length; i++){
            if (guardian[i].guardianAddress == msg.sender){
                guardian[i].ack = true;
                break;
            }
        }
    }

    function gitListGuardian(uint _random) public returns  (Guardian[]){
        randomGuardians.push(guardians[_random]);
    }

    function getGuardian(uint _random) public returns  (Guardian){ 
        if (randomGuardians.length > 1) {
            for (uint i=0; i<randomGuardians.length; i++){
                if (randomGuardians[i] == randomGuardians[_random]){
                    revert;
                } 
            }
        }
        randomguardians.push(guardians[_random]);
    }

    // chainlink 
    function choseGuardian(uint tbd) public returns (uint){
        uint random; //= chainlink call
        return random;
    }

    // sending the Guardian info to the user 
    function sendGuardian() public returns  (Guardian[]){
        return randomguardians; // sequence GuardianId,publicKey
    }

    // recieve seedphrase from user
    function recieveWord(string _seedphrase) public returns (string) {
        seedphrases.push(_seedphrase); //monemic phrase
    }

    // send word to Guardian  ??????????
    function getSnippet() public returns (string, uint){
       for(uint i=0; i<randomguardians.length; i++){
           uint ack1 = 100 + i;
           if (msg.sender == randomguardianss[i].GuardianAddress){
               return (seedphrase[i], ack1);               
           }
       }
    }

    function ackSnippetForGuardian(string _ack) public returns (bool){
        for(uint i=0; i<randomguardianss.length; i++){
           if (msg.sender == randomguardianss[i].GuardianAddress){
               //decrypt _ack with randomGuardians i's public key
               //hash ack1
               //compare ack1 with _ack
               //if match then true, else false
               const messageHash = web3.sha3(ack1);
               if (messageHash == _ack){
                   return true;
               }else{
                   return false;
               }

           }
       }
    }

    function ackSnippetForUser(string _ack) returns (bool){
        
           if (msg.sender == userAddress){
               //decrypt _ack with randomGuardians i's public key
               //hash ack1
               //compare ack1 with _ack
               //if match then true, else false
               const messageHash = web3.sha3(ack1);
               if (messageHash == _ack){
                   return true;
               }else{
                   return false;
               }

           }
    }

    modifier isGuardian(){
        address caller = msg.sender;
        bool _isGuardian = false;
        for (unit i=0; i<guardians.lengh; i++){
            if (guardian[i] == caller){
                _isGuardian = true;
                break;
            }             
        }
        require _isGuardian;
    }

    modifier isUnAckGuardian(){
        address caller = msg.sender;
        bool _unAck = false;
        for (unit i=0; i<guardians.lengh; i++){
            if (guardian[i].guardianAddress == caller && !guardian[i].ack){                
                _unAck = true; 
                break;               
            }
        }
        require _unAck;
    }

    // store contact list to ipfs
    function storeContactList(randomguardianss) {
        // reauest master password from user
        // store it to ipfs
    }
    
    // send fees to aave and issue a stake token
    function earn(){
        // earn interest from aave
    }


}

