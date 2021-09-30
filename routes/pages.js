const express = require('express');
const path = require('path')
const app = express();
const router = express.Router();


router.get('/wamarketing', (req,res)=>{
    res.redirect('https://wamarket.vercel.app')
})

router.get('/72IG', (req, res)=>{
    res.redirect('https://72ig.netlify.app')
})

router.get('/RealEstate', (req, res)=>{
    res.redirect('https://real-estate-page.netlify.app')
})

module.exports = router;