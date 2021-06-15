const game=require('../models/game_id')
module.exports.create=function(req,res){
    let id;
    id=(Math.floor(100000 + Math.random() * 900000));
    gm = new game();
    gm.gameid = id;
    gm.save();
    return res.json({ 'gameId': gm._id });
}

module.exports.generateTicket = function(req, res){
        let g_id = req.params.gameId;

        console.log('gmaeid'+ g_id);
        let userName = req.params.userName; 
        let ticketId;

        let found =false;
        //check if this game id exists
        game.findById(g_id,function(err,g_id){
            if(err){
                console.log('error');
                return;
            }
            if(g_id){
                found = true;
                ticketId =(Math.floor(100000 + Math.random() * 900000));
            }
        })

        if(!found)
        return res.json({error: 'Game id is invalid'});    

        return res.json({ 'ticket': ticketId});

}

