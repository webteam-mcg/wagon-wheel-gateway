const Score = require('../models/scoreModel');
var path = require('path');
const {fileWritter} = require('../services/fileWitter');

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

    filterTeam: function(req, res, next){

        Score.find({team: req.params.team}, (err, scores)=>{

            if (err){
                console.log(err);
                next(err);
            }else{
                fileWritter(scores);
                res.download(path.join(__dirname, '../../data', 'data.json'));
            }
        });
    },
    
    filterInning: function(req, res, next){
        
    }
}