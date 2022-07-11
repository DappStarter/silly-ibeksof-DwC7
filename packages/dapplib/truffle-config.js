require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture story raise noble hover hunt cover army general'; 
let testAccounts = [
"0xa8dea5d7fc9a085165bec6d85865c6bc7ededa40f5fd93707971ce844adee11b",
"0xe947c4ae8b9d8638608db89549c0645b008a65288f527906395259a40bcd7894",
"0xc495d9b0b06747d333dea293ec379e0f50ccd3c0e60fec6aaa1fd3917e00b80a",
"0x0e21e3530a3f109a36bdc20989555ac2c8733aa78fa34ae6ccc93ee1e9d1b572",
"0x1c25763bad99c49627e42fb5c1225e1a527e492abe1dd7ed682286f28b864fbe",
"0xa177803d18484ceb717be1dc5a75312c696bf75507d0cb1a43549172d3019bdd",
"0xfd00770469e549bcb7a6279a4d4c7a8fe4cfc5bf1104de00e44cd0e5148e9178",
"0x937756b83fe34bd4c952bffb6f47aff10f93770c019b1c6199c8d6c9dbb4784a",
"0xeab39c9276240c7598b2b2ee10ad2c80eb4c17de8729382e47dad83946f64afc",
"0x4ac320cde0728313f7ee43c8778dbbe0f93c4e462d05b25e0daec0875fa878e9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


