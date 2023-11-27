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
        res.status(500).json({
            message: "Unable to access server. Please ensure back-end is operational.",
            data: null
        })
    }
})

clothes.get('/:id', async (req, res) => {
    const {id} = req.params;
    process.stdout.write(`GET request received for 'clothes' with id(${id})... `);
    const result = await getSingleClothing(id);
    if(result.id){
        console.log(`Dispensing ${result.name}`)
        res.status(200).json({
            message: "OK",
            data: result
        })
    } else {
        console.log(`ERROR - No item found at address ${id}`)
        res.status(404).json({
            message: "No item found at that address.",
            data: null
        })
    }
})

clothes.post('/', async (req, res) => {
    process.stdout.write(`POST request received to 'clothes...'`);
    const result = await createClothing(req.body);
    console.log(result)
    if(result.id){
        res.status(200).json({
            message: "Successfully added data.",
            data: result
        })
    } else {
        res.status(500).json({
            message: "Unable to add data to table",
            data: null
        })
    }

})

clothes.put('/:id', async (req, res) => {
    const { id } = req.params
    console.log(`PUT request received to 'clothes' with id(${id})`);
    const result = await updateClothing(id, req.body)
    console.log(result)
    if(result.id) {
        res.status(200).json({
            message: `Successfully changed data at id ${id}`,
            data: result
        })
    } else {
        res.status(404).json({
            message: `Failed to change data at id ${id}`,
            data: result
        })
    }


})

clothes.delete('/:id', async (req, res) => {
    const { id } = req.params
    console.log(`DELETE request received to 'clothes' with id(${id})`)
})

module.exports = clothes


