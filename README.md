# Project 4 - Evaluate a News Article with Natural Language Processing (Udacity - Frontend Web Developer)

## Goal
 The goal of this project is to experience with hands-on experience with the tools and environment commonly used in a front-end role. It involves building a web tool that utilizes Natural Language Processing (NLP) to analyze articles or blogs found on other websites, using tools such as Node, Express, Webpack, and Service Worker. 

## Project Introduction
This app is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

## Demo Website (Render, Heroku)
https://fa-article-analysis-website.onrender.com/

https://fa-article-analysis-website.herokuapp.com/

## Project-Prerequisites

1. Webserver - Node
2. Web application framework for routing - Express
3. Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
4. External script - Service Worker
5. External API - MeaningCloud API

## Getting Started

Requirements: 
```bash
  "dependencies": {
    "body-parser": "^1.20.0",
    "cors": "^2.8.5",
    "css-minimizer-webpack-plugin": "^5.0.0",
    "dotenv": "^16.0.3",
    "express": "^4.18.1",
    "jest-fetch-mock": "^3.0.3",
    "node-fetch": "^3.3.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-merge": "^5.8.0"
  },
  "devDependencies": {
    "@babel/core": "^7.19.6",
    "@babel/plugin-transform-modules-commonjs": "^7.19.6",
    "@babel/preset-env": "^7.19.4",
    "babel-jest": "^29.3.1",
    "babel-loader": "^9.0.0",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.7.1",
    "html-webpack-plugin": "^5.5.0",
    "jest": "^29.2.2",
    "jest-environment-jsdom": "^29.3.1",
    "mini-css-extract-plugin": "^2.6.1",
    "node-sass": "^8.0.0",
    "sass": "^1.55.0",
    "sass-loader": "^13.1.0",
    "style-loader": "^3.3.1",
    "terser-webpack-plugin": "^5.3.6",
    "webpack-dev-server": "^4.11.1",
    "workbox-webpack-plugin": "^6.5.4"
  }
  ```
Install Requirements with the following command:
```bash
npm install
```

Unit Testing using Jest Framework
```bash
npm run test
```

### Running Local Tests
```bash
npm start
```


### Trouble

If you can install the loaders and plugins above, please check version and update.
Use the codes below to update loaders and plugins and write on package.json file.
* npx npm-check-updates
* npx npm-check-updates -u

## Features

### User
The user can:
1. request to run Natural Language Processing (NLP) on articles or blogs found on other websites by type URL.

   <img src="https://user-images.githubusercontent.com/79179847/229664021-dbcb6bd9-f547-4b22-b3bf-ed08d4f5e5c7.png" alt="Image Description" width="500" >


2. get 6 information (Agreement, Confidence, Irony, Model, Polarity, Subjectivity)

   <img src="https://user-images.githubusercontent.com/79179847/229663953-a7f9963c-95ff-4bf1-aadf-fa4ab419b089.png" alt="Image Description" width="500" >






