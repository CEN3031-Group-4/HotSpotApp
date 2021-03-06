**Link to deployed site:** [https://hotspot-dkp-g4.herokuapp.com/](https://hotspot-dkp-g4.herokuapp.com/)

## Initialize Repository
Requires [git](https://desktop.github.com/) and [node.js](https://nodejs.org/en/download/)  
installation  
`git clone https://github.com/CEN3031-Group-4/HotSpotApp.git`  
  
#Front-end:  
`cd HotSpotApp/client/`  
`npm install`  
`npm start`  
At this point, the UI should be running on port 3000.  
  
#Back-end: (I like to use nodemon to run server.js as it will restart on file saves)  
`npm install -g nodemon`  
`cd HotSpotApp/server/`  
`npm install`  

#### _**IMPORTANT NOTE**_  
This project does not have a mongoDB connection setup. For:
- local development: create a config file (make sure to name it config.js) in the config folder, which exports your db.uri connection. An example is provided, config/config.example.js. This file will be ignored by git so your db credentials will be kept safe when the app is deployed.  
`module.exports = {  
    db: {  
        uri: '', //place the URI of your mongo database here.  
    }  
};`
Then run:  
`nodemon server/server.js`  
At this point, the Express back-end should be running on port 5000.

- production: Since the config file is not pushed when you deploy your app, you must specifiy your db uri in heroku. Set the uri in heroku as specified in [this](https://devcenter.heroku.com/articles/config-vars) resource. Make sure you name the environement variable "DB_URI". This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file. 
   
  
## Project Features Implemented:  
- #### Gaussian Model Selection
- #### Inputs based on model selection
- #### Meteorological inputs
- #### Receptors - Test points x-distance from model origin
- #### Table Output
- #### Graphical Output

## Credits:  
Lawrence Livermore National Laboratory: [https://www.llnl.gov/](https://www.llnl.gov/)  
CanvasJS: [https://canvasjs.com/](https://canvasjs.com/)  
Create-React-App (Facebook):  
`npx create-react-app my-app`   
React-Bootstrap: [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)  
React-Select: [https://react-select.com/](https://react-select.com/)  
  
## Group 4 Workflow
Our Workflow will include creating a branch for the feature being edited  
`git branch <branch-name>`  
`git checkout <branch-name>`  
`git add .`  
`git commit -m "commit message"`  
`git push origin <branch-name>`  
  
Once work is completed the Scrum Master will evaluate the branch and accept the merge.
   
## Project Notes  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
Service experts in the field currently have a desktop version of an application created and maintained by LLNL, called HotSpot, that is used to track large hazardous environmental plumes. LLNL is looking to create a platform independent web app version of the current solution.  
  
## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
