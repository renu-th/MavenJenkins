var text ="Welcome to Custom Modules";

var print  = function()
{
    console.log(text);
}

module.exports.print = print;

exports.SimpleMessage = 'Hello world';

//or

module.exports.SimpleMessage = 'Hello world';  //Variable
module.exports.print = print;  //Function  

//or
//module.exports.print = print(); use msg.print; in parent
