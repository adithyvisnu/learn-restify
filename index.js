'use strict';

const AppServer = require('./bin/app/server');
const appServer = new AppServer();
const port = process.env.port || 4000;
appServer.server.listen(port, () => {
    console.log('%s started, listening at %s', appServer.server.name, appServer.server.url);
});
