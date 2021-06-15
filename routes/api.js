const express=require("express");
const app=express();
const router=express.Router();
const homeController=require('../controllers/homeController')
   

router.get('/game/create',homeController.create)

// /api/game/{game_id}/ticket/{user_name}/generate

router.get('/game/:gameId/ticket/:userName/generate', homeController.generateTicket)




module.exports=router;