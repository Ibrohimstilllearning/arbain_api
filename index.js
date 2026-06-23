const express = require("express");
const haditsData = require("./data/hadits.json");
const { error } = require("node:console");


const app = express();
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}/hadits`);
})

app.get('/hadits', (req, res) => {
    res.status(200).json(haditsData);
})

app.get('/hadits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const hadits = haditsData.find(h => h.id === id);

    if (!hadits) {
        return res.status(404).json({message: "hadits not found"})
    }

    res.status(200).json(hadits);
})