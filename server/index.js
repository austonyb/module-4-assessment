const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, fortuneCookie, signLog, printLog, editName, deleteName } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", fortuneCookie)

app.post("/api/signlog", signLog)

app.get("/api/signlog", printLog)

app.put("/api/signlog", editName)

app.delete("/api/signlog/:name", deleteName)

app.listen(4000, () => console.log("Server running on 4000"));
