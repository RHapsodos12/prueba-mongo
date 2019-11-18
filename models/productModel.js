const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creación del Schema & Modelo

const ProductSchema = new Schema({
    name: String,
    marca: String,
    modelo: String,
    precio: Number
})

const ProductoM = mongoose.model('producto', ProductSchema);

module.exports = ProductoM;
