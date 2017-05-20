var os = require("os");
var fs = require("fs");
var http = require("http");


console.log("Platform: " + os.platform());

fs.readFile('package.json', 'utf-8',function(err, data){
    if(err)
        throw err;
    else
        console.log(data);
});
