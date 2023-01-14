const http = require("http")
const PORT = process.env.PORT || 5000
const Todo = require("./controller");


const server = http.createServer(async (req,res) => {
    if (req.url === "/api" && req.method === "GET") {

        res.writeHead(200, {
            'Content-Type': "application/json"
        })
     
        res.write("Hi there, This is a Vanilla Node.js API");
    
        res.end();
    }

    if (req.url === "/api/todos" && req.method === "GET") {
        // get the todos.
        const todos = await new Todo().getTodos();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json" });
        // send the data
        res.end(JSON.stringify(todos));
    }

    else {
        res.writeHead(404, {
            'Content-Type': "application/json"
        })
        res.end(JSON.stringify({ message: "Route not found" }));
    }
})

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
})