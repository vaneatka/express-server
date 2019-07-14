const fs = require('fs');

class Product{
    // clasa / logica bazei de date legate de produs

    constructor({name, photo,price, rating, promo}){
        this.name = name;
        this.photo = photo;
        this.price = price;
        this.rating = rating;
        this.promo = promo;
    }


    save(){
        let data = fs.readFileSync('./database/products.json');
        const products_json = JSON.parse(data);
        products_json.push( this );
        data = JSON.stringify(products_json, null, 2);
        fs.writeFileSync('./database/products.json', data);
        console.log( products_json );
    }
}

module.exports = Product;

//     constructor(object){
//      minim cod // proprietati din boject, this 
// }
