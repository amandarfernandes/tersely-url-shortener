const validUrl = require('valid-url');

module.exports = (req,res,next)=>{
    //console.log(req.params.url)
    if (validUrl.isUri(req.params.url)){
        console.log('Looks like an URI');
        next();
    } else {
        res.status(404).json({message:"Invalid URL ", url:req.params.url});
    }
}