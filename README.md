# Project Introduction

We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

## Demo Website (Render, Heroku)
https://fa-article-analysis-website.onrender.com/

https://fa-article-analysis-website.herokuapp.com/
## Table of Contents

* [Project-Prerequisites](#project-prerequisites)
* [Steps](#steps)
* [Trouble](#trouble)

## Project-Prerequisites

1. Webserver - Node
2. Web application framework for routing - Express
3. Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
4. External script - Service Worker
5. External API - MeaningCloud API

## Steps

Getting Started - Setting up the Project
* cd <project directory>
* npm install
* npm i -D @babel/core @babel/preset-env babel-loader
* npm i -D style-loader node-sass css-loader sass-loader
* npm i -D clean-webpack-plugin
* npm i -D html-webpack-plugin
* npm i -D mini-css-extract-plugin
* npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

npm start



## Trouble

If you can install the loaders and plugins above, please check version and update.
Use the codes below to update loaders and plugins and write on package.json file.
* npx npm-check-updates
* npx npm-check-updates -u

