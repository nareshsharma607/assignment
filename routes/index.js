const express=require("express");

const router=express.Router();
console.log('router added')
router.get('/', (req, res) => {
    
    res.render("home");
})

router.use('/api', require('./api'))




module.exports=router;