const express = require("express");
const databaseConnection = require("./database");
const bookRouter = require("./routes/book.routes");
const cors = require("cors");

// database connection
databaseConnection();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(req, res)=>{
    res.send("Hello World");
})

app.use('/book',bookRouter);

app.listen(1000, ()=>{
    console.log("port listening on 1000")
})