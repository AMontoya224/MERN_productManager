const mongoose = require( 'mongoose' );

const ProductSchema = new mongoose.Schema(
    {
        title: { 
            type : String,
            required : [true, 'The title is required' ],
            minlength : [3, 'The title must be at least 3 characters long']
        },
        price: { 
            type: Number,
            required : [true, 'The price is required' ],
            min : [0, 'The price must be at least 5 characters long']
        },
        description: { 
            type : String,
            required : [true, 'The description is required' ],
            minlength : [5, 'The description must be at least 5 characters long']
        }
    }, 
    { timestamps: true } 
);

module.exports.Product = mongoose.model( 'Product', ProductSchema );