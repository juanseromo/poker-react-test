# Poker Game Client

## The test

This is a work in progress version of our brand new poker client which we're all working on feverishly so we can replace our outdated Flash client. It's set up as a git repository, so any changes you make can be committed as you go.

The system is currently loading the table state from a fixture, but the next story in the backlog is to connect it to a real API! The API isn't fully tested yet, so it's likely that there will be some teething troubles that need fixing or marking as TODOs in the process.

```
The client should retrieve the initial table state from the API

API URLs take the form https://storage.googleapis.com/replaypoker-dummy-api/tables/{id}.json and there are tables 1-8 set up for testing.
```

Additionally, our beta tester has reviewed the initial work and asked why the chip values aren't "looking nice"

```
From : Alain Robidoux

Can we keep the chip values looking nice, as they are in the current client, with thousand separators to break the big values up?
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## How to approach this

* Treat this as you would any issue/story on your day job.
* Assume that modern browsers are required to access the site and play the game
* Assume that this is a successful company. This means this software **WILL GROW**. Keep that in mind when fixing/adding features.
* We will evaluate solutions to the problems on several aspects like: design, complexity, attention to detail, correctness, performance, etc.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


