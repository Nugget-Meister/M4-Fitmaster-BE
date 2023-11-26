const db = require("../db/dbConfig.js")

const getClothes = async () => {
//     try {
//         const result = await db.any('SELECT * FROM clothes')
//         return result
//     } catch (error){
//         return error
//     }
}
const getSingleClothing = async () => {
    // try {
    //     const result = await db.one('SELECT * FROM clothes WHERE id=$1', id)
    //     return result
    // } catch (error){
    //     return error
    // }
}
const createClothing = async (input) => {
    // try {
    //     const result = await db.one('INSERT INTO clothes (name, category, heat, cold, maerial, iscomfortable, imageurl) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [
    //         input.name,
    //         input.category,
    //         imput.heat,
    //         input.cold,
    //         input.material,
    //         input.iscomfortable,
    //         input.imageurl
    //     ])
    //     return result
    // } catch (error){
    //     return error
    // }
}

const updateClothing = async (input) => {
    // try {
    //     const result = await db.one('UPDATE clothing SET name=$1 category=$2 heat=$3 cold=$4 material=$5 iscomfortable=$6 imageurl=$7 WHERE id=$8 RETURNING *', [
    //         input.name,
    //         input.category,
    //         imput.heat,
    //         input.cold,
    //         input.material,
    //         input.iscomfortable,
    //         input.imageurl,
    //         input.id
    //     ])
    //     return result

    // } catch (error){
    //     return error
    // }
}
const deleteClothing = async (id) => {
    // try {
    //     const result = await db.one('DELETE FROM books WHERE id=$1 RETURNING *', id)
    //     return result
    // } catch (error){
    //     return error
    // }
}

module.exports = {
    // getClothes,
    // getSingleClothing,
    // updateClothing,
    // createClothing,
    // deleteClothing
}