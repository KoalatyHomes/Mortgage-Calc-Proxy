const path = require('path');
const express  = require('express');
const app      = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer({changeOrigin: true});
const port = 3000;
app.use(express.static('./public'));

//Justin
const serverOne = "http://localhost:3003";
app.all("/api/similarListings", function(req, res) {
    console.log(`redirecting to justin's server`);
    apiProxy.web(req, res, {target: serverOne, changeOrigin: true});
});
app.all("/api/nearbyListings", function(req, res) {
    console.log(`redirecting to justin's server`);
    apiProxy.web(req, res, {target: serverOne, changeOrigin: true});
});

// //Sam
const serverTwo = "http://localhost:3001";
app.all("/api/listings", function(req, res) {
    console.log(`redirecting to sam's server`);
    apiProxy.web(req, res, {target: serverTwo, changeOrigin: true});
});

//Matt
const serverThree = "http://localhost:7777";
app.all("/reviews", function(req, res) {
    console.log(`redirecting to matt's server`);
    apiProxy.web(req, res, {target: serverThree, changeOrigin: true});
});
app.all("/features", function(req, res) {
    console.log(`redirecting to matt's server`);
    apiProxy.web(req, res, {target: serverThree, changeOrigin: true});
});

//Kim
const serverFour = "http://localhost:3333";
app.all("/api/home1", function(req, res) {
    console.log(`redirecting to kim's server`);
    apiProxy.web(req, res, {target: serverFour, changeOrigin: true});
});

app.listen(port, () => console.log(`\nlistening at http://localhost:${port}`));

//app.all = attaches to the application's router, so it's used whenever the app.router middleware is reached (which handles all the method routes... GET, POST, etc)