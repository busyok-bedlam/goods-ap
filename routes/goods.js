const { Router } = require('express');
const godsRouter = Router();
const mongoose = require('mongoose');
const GoodsSchema = require('../db/model');
const  food = require('../db/initial');
const { ObjectId } = require('mongoose').Types

const GoodsItem = mongoose.model('Goods',GoodsSchema);

const router = Router();

router.get("/", (req,res) => {
  GoodsItem.find().then( data => data).then( data => res.send(data));

})

router.get("/:id", (req,res) => {
  const id = req.params.id;
  GoodsItem.findById(id).then(data => {
    res.send(data)
  }).catch(err => console.error(err));
})

router.post("/", (req,res) => {
  const newItem = { ...req.body };
  const goodsItem = new GoodsItem(newItem)
  goodsItem.save().then(() => console.log("SAVING MODEL"));
  res.send(goodsItem);
})

router.delete("/:id", (req,res) => {
  const id = req.params.id;
  console.log(req.params)
  GoodsItem.findById(ObjectId(id)).then( data => data.remove())
  res.send("DELETE")

})

module.exports = router;
