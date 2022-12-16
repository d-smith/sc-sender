
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EtherSender {
    receive() external payable {}

    fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    
}