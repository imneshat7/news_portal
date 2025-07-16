const express = require('express');
const router = express.Router();    

const News = require('../models/news');

const upload = require('../middleware/upload');

// Create a news article

router.post("./api/news", upload.single("image", async (requestAnimationFrame,res)=> {
    try{
        const {title,content,category,tags,author} = req.body;
        const imagePath = req.file ? req.file.path : "";
        const news = new News({
            title,
            content,
            slug: title.toLowerCase().replace(/\s+/g, "-"),
            image:imagePath,
            category,
            tags:tags ? tags.split(",") : [],
            author
        });
        await news.save();
        res.status(201).json({message: "News article created successfully", news}); 
    } catch (error) {
        console.error("Error creating news article:", error);
        res.status(500).json({message: "Internal server error"});
    }
}));

module.exports = router;