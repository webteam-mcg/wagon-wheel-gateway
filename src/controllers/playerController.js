const Player = require('../models/playerModel');

module.exports = {
    addPlayer:function(req, res, next){

        const newPlayer = new Player(req.body);
        newPlayer.save((err, player) => {

            if (err){ 
                console.log(err);
                next(err);
            }else{
                return res.json(player);
            };
        })
    }
}