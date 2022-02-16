require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remind concert hunt industry success tiger'; 
let testAccounts = [
"0x2583c38a1532dc30559bab9390d234d0019039464d0c5ab022780279085b4384",
"0x16d0e2427abef8627aeb1d969a40e58e7d7d8b037ec9577e1264274e89220e13",
"0x71b8cd5f2790b0a9409faad9a4a147c881ec432e4cff44a92c7199d93c4220c7",
"0x54a3da6432c426ba5a299b9c067d8910efe4a54582acf2c3219891a392aa8012",
"0x14970bd2495b9c7465cf39099c1b910375374b89e499b45c57dece36726544d1",
"0xcea5fa87c409cb13e4cda65fb41797d72d2ffe1422de811caab72eef49c588a3",
"0x5b0400b3558de1378b767023e0f0937f5a1297e54ee83a5ddb1c45bfe30679c4",
"0xf263a2db7805a9c0dbbeffc7c859cbea606e7f4a36826fe1c67e1e1958721c59",
"0xa3f5f0ae512f36e4d014f7372f387d26809bb908227521a3e1208de2dd2ce1b8",
"0xa368ce41f6fcd5a9c139c5408491ee1975283c3c7e8d6731e6fa54bdd4a2a658"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

