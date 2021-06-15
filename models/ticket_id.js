
const mongoose=require('mongoose');


const ticketidSchema=new mongoose.Schema({
    
    ticketid:{
        type:String,
        required:true
    },
    gameid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:gameid
    }

})
    



const gameid=mongoose.model('gameid',gameidSchema);
module.exports=gameid;