# OTS-backend

Prerequisite
 
Install docker desktop application

-----> ( test for docker installation at Powershell by inputing docker ps )

Contrainer is show ( docker run already )


Step to install mongodb on docker (inside the root folder -> OTS-backend)


$ docker pull mongo

$ docker run --name backend-OTS -p 27017:27017 mongo


Setting up a project (in typescript)


$ yarn install 

Adds all the modules inside package.json

$ yarn run watch

 Build and run our application.
