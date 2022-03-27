const { Product } = require( '../models/product.model' );




module.exports.createProduct = ( request, response ) => {
    const { title, price, description } = request.body;

    Product.create({
        title,
        price,
        description
    })
        .then( product => response.status( 201 ).json( product ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the insert.';
            return response.status( 400 ).json( err ) 
        });
};