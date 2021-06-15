
const mongoose=require('mongoose');


const gameidSchema=new mongoose.Schema({


    gameid:{
        type:String,
        required:true
    }

})
    



const gameid=mongoose.model('gameid',gameidSchema);
module.exports=gameid;