
var product = require('../../app/controllers/products');

//you can include all your controllers

module.exports = function (app) {


    // product routing
    app.get('/product', product.productIndex);
    app.get('/product/:productid', product.productDetails)
    app.delete('/product/:productid', product.productDelete)
}
