This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Google API

This project is dependent on a working google API

1. Go to https://console.developers.google.com/
2. Create a project if you don't have one already
3. Under Dashboard of the create project hit  `+ ENABLE APIS AND SERVICES` and add the google books API to your project
4. Under credentials, create an API key type credential, and set restrictions to none
5. Copy the API key and pop it into the service call in `App.js`

The same key can be used for both the react and react native project