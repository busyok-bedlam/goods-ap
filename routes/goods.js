const { Router } = require('express');
const godsRouter = Router();
const mongoose = require('mongoose');
const GoodsSchema = require('../db/model');
const  food = require('../db/initial')

const GoodsItem = mongoose.model('Goods',GoodsSchema);

const router = Router();

router.get("/", (req,res,next) => {
  GoodsItem.find().then( data => data).then( data => res.send(data))
})

router.get("/:id", (req,res,next) => {
  const id = parseInt(req.params.id);
  GoodsItem.find({_id: id}).then( data => res.send(data));

})
router.post("/", (req,res,next) => {
  const newItem = { ...req.body };
  const goodsItem = new GoodsItem(newItem)
  goodsItem.save().then(() => console.log("SAVING MODEL"));
  res.send(goodsItem);
})

module.exports = router;
