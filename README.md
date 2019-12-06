Hyperledger Indy Client
=========

[![npm scoped](https://img.shields.io/badge/npm-v1.0.0-blue)]

A small library which wraps the indy-sdk.

## Installation

  `npm install @alphablok/indy-client`

## Usage
    import IndyClient from '@alphablok/indy-client';

    const indyClient = new IndyClient('faber', 'http://localhost:8080');

    await indyClient.connectAsync();
    await indyClient.useWalletAsync('myWallet', '123456', true);

    //create a verinym
    await indyClient.addDidAsync('steward_did', '000000000000000000000000Steward1');
  
  
  Output should be { status: 'OK', message: 'wallet [steward] verinmy has been created.' }


## Tests

  `npm run test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
