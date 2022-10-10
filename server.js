const fs = require("fs");
const http = require("http");

// read from file 
const home = fs.readFileSync("index.html","utf-8");
const contact = fs.readFileSync("contact.html","utf-8");
const about = fs.readFileSync("about.html","utf-8");
const services = fs.readFileSync("services.html","utf-8");

localhost = "127.0.0.1";

const server = http.createServer((req,res) =>{
    const url = req.url;
    console.log(url);

    res.statusCode = 200;
    res.setHeader("content-type", "text/html");

    if(url == "/"){
    res.end(home);
    }
    else if(url == "/about"){
        res.end(about);
        }
        else if(url == "/contact"){
            res.end(contact);
            }
            else if(url == "/services"){
                res.end(services);
                }
                else{
                    res.statusCode = 200;
                    res.end("<h1>404 not found</h1>");
                }
});

server.listen(80,localhost,()=>{
    console.log(`server is listening at http://${localhost}`);
})