var fs = require('fs');
exports.productIndex = ( req, res )=> {
    fs.readFile('./database/products.json', (err,data)=>{
        if(!err){
            // console.log(data.toString());
            res.append('Content-type', 'application/json')
            res.send(data.toString());
        } else {
			console.log(err)
		}
    });
}

exports.productDetails = ( req, res )=> {
    console.log(req.params.productid)
    fs.readFile('./database/products.json', (err,data)=>{
        if(!err){
            let products = JSON.parse(data);
            let product = products.find(el=> el.id == req.params.productid);            
            // res.append('Content-type', 'application/json')
            // res.send(product);
            res.jsonp(product)
        }
    });
}

exports.productDelete = ( req, res )=> {
    console.log(req.params.productid)
    fs.readFile('./database/products.json', (err,data)=>{
        if(!err){
            let products = JSON.parse(data);
            let product = products.filter(el=> el.id != req.params.productid);            
            // res.append('Content-type', 'application/json')
            // res.send(product);
            res.jsonp(product)
        }
    });
}