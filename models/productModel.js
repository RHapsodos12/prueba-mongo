const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creación del Schema & Modelo

const ProductSchema = new Schema({
    name: String,
    marca: String,
    modelo: String,
    precio: Number
})

//Args ('coleccion', 'Schema')
const ProductoM = mongoose.model('product', ProductSchema);

module.exports = ProductoM;
