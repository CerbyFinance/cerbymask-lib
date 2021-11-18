<p align="center">
    <img src="public/android-chrome-192x192.png" wdith="200px">
    <p align="center">
    <a>https://cerbymask.io</a> - <a>https://t.me/cerbymask</a>
    </p>
    <h1 style="margin-top: -20px;text-align: center;border-bottom: none;">CerbyMask</h1>
    <p style="margin-top: -20px;font-size:10px;text-align: center;border-bottom: none;">CerbyMask Library to interact with the Radix Ledger</p>
</p>


# Install

```bash
$ npm install @cerbymask/cerbymask-lib
```
# Getting Started 

This library is a wrapper to the object `window.cerbymask` that is made available in webpage load time.

## Install dependencies

After cloning the project, navigate to the root folder and run:

```bash
$ npm install
```

## Build

In order to build the extension, execute:

```bash
$ npm run build
```

# API

The following table describes the interface containing the functions which are injected in runtime - these functions are accessible by simply using the instance of `window.cerbymask`

## Callbacks
Every function call returns an event in case the specific function/method has been fully performed - e.g. `onClientConnect` is called once the user has allowed the web application to `connect()`. These events are emitted using <a target="_blank" href="https://nodejs.org/api/events.html">NodeJS Event Emitter</a>

## Middleware
In case the web applications performs a function call without having explicit permission, the background worker replies back with `false` as response.

Checkout an example <a target="_blank" href="https://github.com/CerbyMask/cerbymask-react-integration-example/blob/master/src/App.tsx">here</a>.

## Functions
| Function          | Event Callback    | Description |
| :-----------       | :-----------       | :----------- |
| connect           | onClientConnect   | Performs a request to the extension to allow the current client to communicate to the background worker |
| validateWallet    | onValidateWallet  |  Validate if the user contains a wallet, we recommend to display 'Connect' whenever validation returns false |
| submitTransaction    | onApproveTransaction  |  Perform a transaction via CerbyMask |
| events    | -  |  NodeJS Event Emitter object where you attach `.on("<event callback>")` from previous function calls |
