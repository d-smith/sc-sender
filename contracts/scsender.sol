
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EtherSender {

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner may call this function");
        _;
    }

    receive() external payable {}

    fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function sendEther(uint val, address to) onlyOwner() public{
         (bool sent, ) = to.call{value:val}("");
        require(sent, "Failed to send Ether");
    }

    
}