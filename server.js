const express = require("express")
const axios = require("axios")

const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/", async (req, res) => {
    const word = req.body.word;
    try {
        const response = await axios.get(API_URL + word);
        const result = response.data;
        res.render("index.ejs", { content: result });
        // res.json(result);
    } catch (error) {
        res.render("index.ejs", { content: error.response })
    }
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
});