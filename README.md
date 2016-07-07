# State Server

### Node 4.4.5

Programming puzzle.

## 1) Install Packages

npm install

## 2) Run Server

node server.js

## Usage

You can run the server in the background with ```make server``` or simply run ```node server.js```
The server will run on localhost port 8080.
You can then make POST requests to the server passing longitude and latitude as params. A good tool to use is Postman. 

EX: http://localhost:8080/?longitude=-77.036133&latitude=40.513799

The server will respond with the name of the state that's within those coordinates.

**If you start the server with the make command be sure to kill the process when you're finished.**

Enjoy :)
