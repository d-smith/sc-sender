const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");
const { ethers } = require("hardhat");
  
  describe("SendEther", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deloyEtherContract() {
      
  
      // Contracts are deployed using the first signer/account by default
      const [owner, acct1, acct2] = await ethers.getSigners();
  
      const EtherSender = await ethers.getContractFactory("EtherSender");
      const etherSender = await EtherSender.deploy();
  
      return { etherSender, owner, acct1, acct2 };
    }
  
    describe("Deployment", function () {
      it("Should set the right initial balance", async function () {
        const { etherSender, owner, acct1, acct2  } = await loadFixture(deloyEtherContract);
  
        expect(await etherSender.getBalance()).to.equal(0);
      });

      it("Should should show an updated balance", async function () {
        const { etherSender, owner, acct1, acct2  } = await loadFixture(deloyEtherContract);
       
        await owner.sendTransaction({
            to: etherSender.address,
            value: ethers.utils.parseEther("0.01")
        });

        expect(await etherSender.getBalance()).to.equal(ethers.utils.parseEther("0.01"));
        
      });


  

    });
  
    
  });
  