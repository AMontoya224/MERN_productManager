const { Product } = require( '../models/product.model' );




const createProduct = ( request, response ) => {
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

const getAllProducts = ( request, response ) => {
    Product.find( {} )
        .then( products => response.status( 200 ).json( products ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the find.';
            return response.status( 400 ).json( err ) 
        });
};

const getProduct = ( request, response ) => {
    Product.findOne( {_id:request.params.id} )
        .then( product => response.status( 200 ).json( product ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the findOne.';
            return response.status( 400 ).json( err ) 
        });
};

const ProductController = {
    createProduct,
    getAllProducts,
    getProduct
};

module.exports = ProductController;