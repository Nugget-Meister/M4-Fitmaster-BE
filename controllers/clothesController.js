const express = require('express');

const clothes = express.Router();

const { 
    getClothes,
    getSingleClothing,
    createClothing,
    updateClothing,
    deleteClothing
} = require("../queries/clothes.js")

clothes.get('/', async (req, res) => {
    console.log(`GET request for all 'CLOTHES' received.`)
    const result = await getClothes();
    if(result) {
        if(result.length == 0) {
            console.log(`WARNING - Database returned no results. Ignore if intended.`)
        }
        res.status(200).json({
            message: "OK",
            data: result,
        })
    } else {
        console.log("500 - Unable to access SQL server. Please check if database is active and seeded.")
        res.status(404).json({
            message: "Unable to access server. Please ensure back-end is operational.",
            data: null
        })
    }
})

clothes.get('/:id', async (req, res) => {
    const {id} = req.params
    console.log(`GET `)
})

clothes.post('/', async (req, res) => {
    console.log("")
})

clothes.put('/:id', async (req, res) => {
    const { id } = req.params
    console.log("")
})

clothes.delete('/:id', async (req, res) => {
    const { id } = req.params
    console.log("")
})

module.exports = clothes


