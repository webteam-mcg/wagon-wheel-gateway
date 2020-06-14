const Score = require('../models/scoreModel');

module.exports = {
    addScore: function(req, res, next){

        const newScore = new Score(req.body);
        newScore.save((err, score)=>{

            if(err){
                console.log(err);
                next(err);
            }else{
                res.json(score);
            }
        });
    },
}