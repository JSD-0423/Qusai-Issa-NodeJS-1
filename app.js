console.log("Hello world");

const http = require ('http');

const server = http.createServer((req, res)=>{
    console.log("I'm the server");
    console.log(req.url);
    console.log(req.time);
    const fs = require('fs');


const readline = require('readline');

const filePath = 'requests.txt';

//check file exists or not
const dateTimeObject = new Date();

if(fs.existsSync(filePath)){
    console.log("File Already Exists");    
    
    
    //update file 
    
    fs.appendFile("requests.txt",'\n'+req.url +' :'+ dateTimeObject.toTimeString() , (err) => {
      if(!err) console.log("file updated successfully");
    });}
else{
    console.log("Create a new file");
    //create a file

    fs.writeFileSync("requests.txt", req.url +' :'+ dateTimeObject.toTimeString());
    console.log("File Created Successfully");
}
    
    }
);

server.listen(3000);