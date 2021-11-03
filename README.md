
<h1 align="center"><a href="https://emmethubprojectsrestapi.herokuapp.com/api" target="_blank">🌐 emmethub projects rest api</a></h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/kimanicharles911/emmethub_nodejs_modules/blob/master/LICENSE.txt" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> This is a repository that holds a basic Expressjs rest-api. In it's simplicity it demonstrates the use of some http methods i.e GET, POST, PUT, DELETE. It is not commented however, to understand it you can read [this PDF](https://github.com/kimanicharles911/emmethub_projects_rest_api/blob/master/WD_L2T18_Express_II.pdf)

## Deployed at
* https://emmethubprojectsrestapi.herokuapp.com/api

## Setup/Installation Requirements
##### Install Dependencies

```sh
sudo apt install nodejs #(for linux platform)
npm i
```

* Add the below line in your package.json file as one of the scripts value:
```sh
"dev": "nodemon app.js"
```

##### Usage

```sh
npm run dev
```

## How It Was Built
##### Node
```sh
npm init
npm i express
npm i nodemon --save-dev
```

##### Dependencies
* Node
* Express
* Nodemon

##### Deploy to Heroku
* Add this in package.json
```sh
"engines": {
  "node": "14.15.1"
}
```
* Then run the following terminal commands:
```sh
install heroku
heroku login
touch Procfile
```

* Add this line in the Procfile which will depend with the name of your server file which in my case is app.js:
```sh
web: node app.js
```

* Then run the following terminal commands:
```sh
heroku create
heroku login
touch Procfile
git add . 
git commit -m"first deploy to heroku"
## optional for pushing to github: git push -u origin master
git push heroku master
```

### folder structure
```
app.js 
package-lock.json      
projectsData.json
LICENSE.txt  
package.json  
permaProjectData.json  
README.md
```

## License and Copyright Information.

This project is MIT licensed see [my MIT LICENSE](https://github.com/kimanicharles911/emmethub_projects_rest_api/blob/master/LICENSE.txt) for details.<br />
Copyright © 2021 [Charles Kimani & Emmethub](https://github.com/kimanicharles911).

### Author

###### 👤 **Charles Kimani**

* Website: https://emmethub.com/founder
* Github: [@kimanicharles911](https://github.com/kimanicharles911)
* LinkedIn: [@kimanicharles](https://linkedin.com/in/kimanicharles)

#### Show your support

Give a ⭐️ if this project helped you!

***