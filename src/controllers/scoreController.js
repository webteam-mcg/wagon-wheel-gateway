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
                // console.log('\x1b[32m','Filetr by team');
                fileWritter(scores);
                res.download(path.join(__dirname, '../../data', 'data.json'));
            }
        });
    },
    
    filterInning: function(req, res, next){
        
        Score.find({team: req.params.team, session: req.params.session}, (err, scores) => {

            if (err){
                console.log(err);
                next(err);
            }else{
                // console.log('\x1b[32m','Filetr by inning');
                fileWritter(scores);
                res.download(path.join(__dirname, '../../data', 'data.json'));
            }
        });
    },

    filterBoundary: function(req, res, next){

        Score.find({team: req.params.team, $or:[{score:4}, {score:6}]}, (err, scores) => {

            if(err){
                console.log(err);
                next(err);
            }else{
                // console.log('\x1b[32m','Filetr by boundary');
                fileWritter(scores);
                res.download(path.join(__dirname, '../../data', 'data.json'));
            }
        });
    },

    filterPlayer: function(req, res, next){

        Score.find({player: req.params.player, session: req.params.session}, (err, scores) => {

            if(err){
                console.log(err);
                next(err);
            }else{
                // console.log('\x1b[32m','Filetr by player');
                fileWritter(scores);
                res.download(path.join(__dirname, '../../data', 'data.json'));   
            }
        })
    }
}