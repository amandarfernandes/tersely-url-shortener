mongoose = require('mongoose');
const    ShortUrl = mongoose.model('ShortUrl');

module.exports = async (req,res) => {
    let foundUrl = await ShortUrl.findOne({terseUrl:req.params.shortUrl });
    if (foundUrl)
        res.redirect(foundUrl.originalUrl);
    else
        res.status(401).json({message:'Url not Found',url:req.get('host')+"/"+req.params.shortUrl})
}