const app = require("express")()
const http = require("http").createServer(app)
const bodyParse = require("body-parser")

app.get("/", (request, result) => 
    {result.sendFile(__dirname + "/index.html")})

app.use((req, res) => {
    res.sendFile(__dirname + req.url);
  })

http.listen(3000, function(){
    console.log('listening on *:3000');
})