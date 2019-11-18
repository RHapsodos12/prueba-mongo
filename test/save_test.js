const mocha = require('mocha');
const assert = require('assert');
//Agregamos el modelo
const Product = require('../models/productModel');

//Describe la función del archivo
describe('Guardar registros', function(){

    it('Agrega un registro a la base de datos', function(){
        
        var prod = new Product({
            name: 'Lavadora',
            marca: 'G E',
            modelo: 'LGE-123',
            precio: 6350
        });

        prod.save().then(function(){
            assert(prod.isNew);
            done();
        });

    });


});