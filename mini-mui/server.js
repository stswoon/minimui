const fs = require("fs");
const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.static('public'));

app.get("/health", function (request, response) {
    response.send("OK");
});

app.get("/fragmentMetadata", function (request, response) {
    const fragmentName = request.query.id;
    response.type('json')
    const result = {js: `//localhost:5001/fragmentResource?id=${fragmentName}.js`}
    if (fs.existsSync(`storage/${fragmentName}.css`)) {
        result.css = `//localhost:5001/fragmentResource?id=${fragmentName}.css`;
    }
    response.send(JSON.stringify(result));
});

app.get("/fragmentResource", function (request, response) {
    const fileName = request.query.id;
    if (!fs.existsSync(`storage/${fileName}`)) {
        response.send("ERROR: no file").status(500);
    }
    const fileData = fs.readFileSync(`storage/${fileName}`, 'utf8');
    if (request.headers["accept"].includes("text/css")) {
        response.type("css");
    }
    response.send(fileData);
});

app.listen(5001);
