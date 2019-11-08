var express = require('express');
var router = express.Router();
var app=express();
var out=require('./output.pdf');
app.get('/', (req, res) => {
  res.send('Hello from the main application');
});

const reportingApp = express();
app.use('/reporting', reportingApp);

//const server = app.listen(3000);

const jsreport = require('jsreport')({
  extensions: {
      express: { app: reportingApp},
  }, //, server: server 
  appPath: "/reporting"
});

jsreport.init().then(() => {
  console.log('jsreport server started')
}).catch((e) => {
  console.error(e);
});
 out.stream.pipe(res);
module.exports = router;