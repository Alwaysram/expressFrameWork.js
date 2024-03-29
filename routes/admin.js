// const express = require('express');

// const router= express.Router();

// router.get('/add-product',(req,res,next)=>{
//     res.send('<h1><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });

// router.post('/add-product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// });

// module.exports = router;


const path = require('path');

const express = require('express');

const rootDir =require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;

