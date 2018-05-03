const validUrl = require('valid-url'),
     shortid = require('shortid'),
     mongoose = require('mongoose');

const    ShortUrl = mongoose.model('ShortUrl');

module.exports = async (req,res,next)=>{

    const tersely = shortid.generate()
    let newUrl = await new ShortUrl({originalUrl:req.params.url, terseUrl:tersely }).save();
    res.json(
        {
        "original_url": req.params.url,
        "short_url": "http://"+req.get('host')+"/"+tersely
        }
    );
}