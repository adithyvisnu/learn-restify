'use strict';

const restify = require('restify');
// const serveStatic = require('serve-static-restify');
const project = require('../../package.json');
// const basicAuth = require('../auth/basic_auth_helper');

let AppServer = function(){
  this.server = restify.createServer({
    name: project.name + '-server',
    version: project.version
  });

  this.server.serverKey = '';
  //this.server.use(restify.acceptParser(this.server.acceptable));
  this.server.use(restify.plugins.queryParser());
  this.server.use(restify.plugins.bodyParser());
  this.server.use(restify.plugins.authorizationParser());

  //required for basic auth
  //this.server.use(basicAuth.init());

  //anonymous can access the end point, place code bellow
  this.server.get('/', (req, res, next) => {
    res.send({
      status: "success",
      data: 'Product service',
      message: 'This service is running properly.',
      code:200
    })
  }); 
}
 
module.exports = AppServer;
