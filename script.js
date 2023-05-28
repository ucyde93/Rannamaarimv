// Connect to the Ethereum network using web3.js
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/61e1b3c9e641410dab724cdfe48fba3d'));
}

// Contract ABI (Application Binary Interface)
var contractABI = [
  // Include the ABI of your smart contract here
];

// Contract address
var contractAddress = 'YOUR_CONTRACT_ADDRESS';

// Create an instance of the smart contract
var contractInstance = new web3.eth.Contract(contractABI, contractAddress);

// Get and display the total ETH raised
contractInstance.methods.getContractBalance().call().then(function(result) {
  var ethRaised = web3.utils.fromWei(result, 'ether');
  document.getElementById('ethRaised').innerText = ethRaised + ' ETH';
});

// Get and display the total tokens sold
contractInstance.methods.totalSupply().call().then(function(result) {
  document.getElementById('tokensSold').innerText = result + ' tokens';
});
