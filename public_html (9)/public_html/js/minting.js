/** MINTING */
var count = 1;

$('#count-plus').on('click', () => {
  count++;
  $('#count').text(count);
    setPriceOnSite(count);
});

$('#count-minus').on('click', () => {
  if(count > 1) {
    count--;
    $('#count').text(count);
    setPriceOnSite(count);
  }
});

var p;
var ac;
var topConnectButton;
var mobileConnectButton;
var statusText;
var modalButton;
var web3;
var arrayABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"address","name":"_seller","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"addMultiplePresaleUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"addPresaleUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"changePreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"inPreSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preSaleCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"presaleWallets","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removePresaleUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seller","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setPresaleCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_seller","type":"address"}],"name":"setSeller","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];
var contractAddress = "0x8420ae6069A6723dC835A9A2901a68EbED6e4cA2";

const main = async () => {
const provider = await detectEthereumProvider(); 

if (provider) {
  p = provider;
  web3 = new Web3(provider);
} else {
  alert("Please install Metamask");
}


};


$('#connectButton').click(() => connect())

$('#mintButton').click(() => mintNFT());

function parseContent() {
$('#connectButton span').text("Connected");
$('#status-modal span').text(ac.substring(0, 5) + " . . . . . . " + ac.substring(37));
$('#connectModal').hide();
$('#connectButton').text("Connected");
setPriceOnSite(count);
}

async function connect() {
try {
  if (ac == undefined) {
  let accounts = await p.request({ method: "eth_requestAccounts" });
  ac = accounts[0];
  await switchOrAddNetwork();
  parseContent();
  }
} catch (err) {
  console.error;
}

if (ac != undefined) {
  await switchOrAddNetwork();
  parseContent();
}

setPriceOnSite(count);
}

const switchOrAddNetwork = async () => {
const chainId = 1 // ETH Mainnet

if (window.ethereum.networkVersion !== chainId) {
  try {
  await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: web3.utils.toHex(chainId) }],
  });
  } catch (err) {
    console.error;
  }
}
}

async function checkNetwork() {
if (typeof web3 === "undefined") alert("Web3 Error");
var chainId = parseInt(Web3.givenProvider.chainId, 16);
if (chainId != 1) return false;
return true;
}

async function setPriceOnSite(amount) {
let contract = new web3.eth.Contract(arrayABI, contractAddress);
const inPreSale = await contract.methods.inPreSale().call();
let totalPrice
let singlePrice;
if(inPreSale == true) {
  singlePrice = await contract.methods.presaleCost().call();
  totalPrice =  (parseFloat(web3.utils.fromWei(singlePrice)) * amount).toFixed(1);
}
else {
  singlePrice = await contract.methods._price().call();
  totalPrice =  (parseFloat(web3.utils.fromWei(singlePrice)) * amount).toFixed(1);
}
$('#single-price').html("<span>" + parseFloat(web3.utils.fromWei(singlePrice)) + " ETH</span>")
$('#totalPrice').html("<span>" + totalPrice + " ETH</span>");
}


async function mintNFT() {
console.log("From 1");
await switchOrAddNetwork();
if ((await checkNetwork()) === false) {
  alert("Please change to ETH network");
  return;
}

let contract = new web3.eth.Contract(arrayABI, contractAddress);
let price;
const inPreSale = await contract.methods.inPreSale().call();	
if(inPreSale == true) {
price = await contract.methods.presaleCost().call();
}
else {
  price = await contract.methods._price().call();
}



let amount = count;
price *= amount;

await contract.methods
  .mint(amount)
  .send({ from: ac, value: price })
  .on("transactionHash", (hash) => console.log(hash))
  .on("error", (error) => alert(error.message));

window.location.reload();
}

async function mintNFT2() {
console.log("From 2");
await switchOrAddNetwork();
if ((await checkNetwork()) === false) {
  alert("Please change to ETH network");
  return;
}

let contract2 = new web3.eth.Contract(arrayABI2, contractAddress2);
let price;
const inPreSale = await contract2.methods.inPreSale().call();	
if(inPreSale == true) {
price = await contract2.methods.presaleCost().call();
}
else {
  price = await contract2.methods._price().call();
}



let amount = count;
price *= amount;

await contract2.methods
  .mint(amount)
  .send({ from: ac, value: price })
  .on("transactionHash", (hash) => console.log(hash))
  .on("error", (error) => alert(error));

window.location.reload();
}

main();

window.ethereum.on("accountsChanged", async () => {
const accounts = await web3.eth.getAccounts();
ac = accounts[0];
if (ac != undefined) {
  parseContent();
} else if (ac == undefined) {
  mobileConnectButton.childNodes[0].textContent = "Connect";
  topConnectButton.childNodes[1].textContent = "Connect";
  statusText.childNodes[1].textContent = "Not connected";
  modalButton.style.visibility = "visible";
}
});



window.onload = async () => {
const accounts = await web3.eth.getAccounts();
ac = accounts[0];
if (ac != undefined) {
  parseContent();
}
};

