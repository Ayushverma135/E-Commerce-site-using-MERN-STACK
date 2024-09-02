// import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

// const productSchema = new mongoose.Schema({
//     id: String,
//     url: String,
//     detailUrl: String,
//     title: Object,
//     price: Object,
//     quantity: Number,
//     description: String,
//     discount: String,
//     tagline: String
// });

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'product');

// const products = mongoose.model('product', productSchema);

// export default products;

import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

// Define the product schema
const productSchema = new mongoose.Schema({
    id: String,  // Field to be auto-incremented
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

// Initialize the AutoIncrement plugin with your mongoose connection
const AutoIncrement = AutoIncrementFactory(mongoose.connection);

// Apply the plugin to the schema
productSchema.plugin(AutoIncrement, { inc_field: 'product' }); // Increment 'id' field

const products = mongoose.model('product', productSchema);

export default products;
