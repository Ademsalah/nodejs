console.log("HELLO WORLD");



const http = require('http');
const newHello = '<h1> hello Node</h1>';

const server = http.createServer(function (req, res){
    res.write(newHello);
    res.end();
});
 server.listen(3000, (err) =>{
    err? console.log(err) : console.log('The server is running on port 3000');
 });



 const fs = require("fs")
 fs.writeFile("welcome.txt", "hello Node",(err) =>{
    if (err) {
        console.log(err);
    } else {
        console.log("File written successfully\n");
        console.log("the written has following contents:");
        console.log(fs.readFileSync("welcome.txt","utf8"));
    }
 });

 fs.readFile('hello.txt', 'utf8', function (err, data ){
    console.log(data);
 });


 const passwordGenerator = require('./password-generator');
 passwordGenerator.passGenerator();




 const transporter = require('./email-sender');

 console.log(transporter.emailSender);


