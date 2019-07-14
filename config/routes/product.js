
var product = require('../../app/controllers/products');
const { check } = require('express-validator');
//you can include all your controllers

module.exports = function (app) {
    // product routing
    app.get('/product', product.productIndex);
    app.get('/product/create', product.productCreate)
    app.post('/product/save',[
        check('name').isLength({min:3}),
        check('price.amount').isLength({min:1}),
            ] ,product.productSave)
    app.get('/product/:productid', product.productDetails)
    app.delete('/product/:productid', product.productDelete)
    

}

// de adaugat reguli de validare