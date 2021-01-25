pragma solidity >=0.5.0 <0.8.0;

contract Test{
    uint private count;
    address private owner;

    constructor() public{
        owner = msg.sender;
    }

    function increase() public {
        count++;
    }

    function decrease() public{
        count--;
    }

    function getCount() public view returns (uint){
        return count;
    }

    function() payable external{}
}