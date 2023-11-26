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
    console.log(``)
})

clothes.get('/:id', async (req, res) => {
    const {id} = req.params
    console.log(``)
})

clothes.post('/', async (req, res) => {
    console.log("")
})

clothes.put('/:id', async (req, res) => {
    console.log("")
})

clothes.delete('/:id', async (req, res) => {
    console.log("")
})



