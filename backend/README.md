# Spartancoin

# Steps to create the network
1. node bin/spartancoin.js
2. node bin/spartancoin.js -p 3002 --name 1
3. node bin/spartancoin.js -p 3003 --name 2 --peers http://localhost:3002


# Testing
create a wallet - { "password": "a a a a a" }
{"id":"8b98ccf7a5e02808930fe3f9b854b565ccc1bf7cb2a1c15b0e5a96f92ff680f8","addresses":[]}

# Create two addresses for the wallet created
password: a a a a a
{"address":"52c25a723c72e8d863356831ce03fe7c02eb27ffbcf4012a73a598a2c76a8daa"}
{"address":"0ca1665ca5f59992b942e3d313435d97809c6b477ae487c1626e9a718f0d6338"}

# Mine a block to the address 1 so we can have some coins
{ "rewardAddress": "52c25a723c72e8d863356831ce03fe7c02eb27ffbcf4012a73a598a2c76a8daa" }

# Create a transaction from address 1 to address 2
{   
    "fromAddress": "52c25a723c72e8d863356831ce03fe7c02eb27ffbcf4012a73a598a2c76a8daa", 
    "toAddress": "0ca1665ca5f59992b942e3d313435d97809c6b477ae487c1626e9a718f0d6338", 
    "amount": 1000, 
    "changeAddress": "52c25a723c72e8d863356831ce03fe7c02eb27ffbcf4012a73a598a2c76a8daa" 
}

# Mine the transaction from address 1
{ "rewardAddress": "52c25a723c72e8d863356831ce03fe7c02eb27ffbcf4012a73a598a2c76a8daa" }

# Get how many confirmations does the trasaction has
http://localhost:3001/node/transactions/c6bfdf32b91944f2cc55eb62243446c88f3d5ae95dcf81bddccb26a64cc5a9b8/confirmations

# Get address 1 balance
http://localhost:3001/operator/52c25a723c72e8d863356831ce03fe7c02eb27ffbcf4012a73a598a2c76a8daa/balance

# Get address 2 balance
http://localhost:3001/operator/0ca1665ca5f59992b942e3d313435d97809c6b477ae487c1626e9a718f0d6338/balance

# Get unspent transactions for address 1
http://localhost:3001/blockchain/transactions/unspent?address=52c25a723c72e8d863356831ce03fe7c02eb27ffbcf4012a73a598a2c76a8daa