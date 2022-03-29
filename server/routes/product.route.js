const ProductController = require( '../controllers/product.controller' );




module.exports = function( app ){
    app.post( '/api/new', ProductController.createProduct );
    app.get( '/api/products', ProductController.getAllProducts );
    app.get( '/api/products/:id', ProductController.getProduct );
    app.put( '/api/:id/edit', ProductController.updateProduct );
    app.delete( '/api/:id/delete', ProductController.deleteProduct );
}