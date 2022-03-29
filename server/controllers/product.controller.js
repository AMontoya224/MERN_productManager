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

const updateProduct = ( request, response ) => {
    Product.findOneAndUpdate( {_id: request.params.id}, request.body, {new:true} )
        .then( updatedProduct => response.status( 202 ).json( updatedProduct ) )
        .catch( err => {
            response.statusMessage = 'There was an error executing the update.';
            return response.status( 400 ).json( err ) 
        });
};

const deleteProduct = ( request, response ) => {
    Product.deleteOne( { _id: request.params.id } )
        .then( () => response.status( 204 ).end() )
        .catch( err => {
            response.statusMessage = "There was an error executing the delete. ";
            return response.status( 400 ).json( err )
        });
}

const ProductController = {
    createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
};

module.exports = ProductController;