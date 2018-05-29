const { Router } = require('express');
const path = require('path');
const router = Router();

const pathTo = path.join(path.dirname(path.resolve('server.js')),"view","index.html")

router.get('/', (req,res,next) => {
  res.sendFile(pathTo, () => { console.log("SENDING FILE")});
  // next();
})

module.exports = router;
