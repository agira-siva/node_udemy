const fs = require('fs');

function handleRequest(req,res){
    const url = req.url;
    const method = req.method;

    if (url === "/users") {
        res.setHeader("content-type","text/html");
        return res.end(`<ul><li>yadesh</li><li>siva</li></ul>`);
    }

    
    if(url === "/create-user" && method === "POST"){
        const chunks = [];
        req.on('data',(chunk) =>{
            chunks.push(chunk);
        })

        req.on("end", ()=> {
            const data = Buffer.concat(chunks).toString();
            const parsedData = new URLSearchParams(data);
            const dataObj = {};
            for(var pair of parsedData.entries()){
                dataObj[pair[0]] = pair[1] + "\n";
            }

            fs.writeFile("users.txt", dataObj.username, {flag: "a+"}, () =>{
                console.log("appended the user");
            })
        })
        res.writeHead(302,{
            'location' : "/"
        })
        return res.end();
    }

    res.write(`<h1>hii welcome to my website</h1>`);
    res.write(
        `<form action ="/create-user" method="POST">
            <label for="username">username:</label>
            <input id="username" name="username" type="text">
            <button type="submit">submit</button>
        </form>`
    );
    res.end();
}


module.exports.handleRequest = handleRequest;