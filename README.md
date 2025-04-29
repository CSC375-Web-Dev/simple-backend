# Simple Backend

## What is this

An extremely simple backend server to give a deployment demo

## Environment file

Rename `.env.sample` file to `.env`, and then fill in the value you want to use for the `MESSAGE` environment variable.

## How to run

First run `npm install` to install dependencies.

Next, run `npm run start` to start the server.

## API test files

There are two test files for both endpoints of the API, `ping.test.js` and `message.test.js`. Start the server first, and then use either of these test files to verify the endpoints can be called successfully. You can run them using node (e.g. `node test/ping.test.js`).