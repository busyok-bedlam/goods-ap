const { Schema } = require('mongoose');
const GoodsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  freshness: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  termOfPurchase: {
    type: Date,
    default: new Date()
  },
  quantity: {
    type: Number,
    required: true
  }
})
module.exports = GoodsSchema;
