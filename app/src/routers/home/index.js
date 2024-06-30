const  express = require("express");
const ctrl = require("./home.ctrl")
const  router = express.Router();
const fs =  require('fs').promises
const path = require('path')





// const ADminGoodsKiosk = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminUser/adminGoodsKiosk.json") 
// const UserGoodsKinds = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/database/userGoodsKinds.json") 
// const AdminNext = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminSetKinds/adminNext.json") 
// const kokoTime = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminSetKinds/kokoTime.json") 







 router.get("/userGoodsKinds", ctrl.output.userGoodsKinds)
router.get("/Https", ctrl.output.Https)
router.get("/websocket", ctrl.output.websocket)
router.get("/calender", ctrl.output.calender)
router.get("/", ctrl.output.index)
router.get("/newLogin", ctrl.output.newLogin)
router.get("/koko", ctrl.output.koko)
router.get("/adminTimeAdd", ctrl.output.adminTimeAdd)
router.get("/register", ctrl.output.register)
router.get("/goodsKinds", ctrl.output.goodsKinds)
router.get("/admin", ctrl.output.admin)
router.get("/adminLogin", ctrl.output.adminLogin)
router.get("/adminFee", ctrl.output.adminFee)
router.get("/Kioce", ctrl.output.Kioce)
router.get("/adminBench", ctrl.output.adminBench)
router.get("/adminViews", ctrl.output.adminViews)
router.get("/adminUinfo", ctrl.output.adminUinfo)
router.get("/goodsPush", ctrl.output.goodsPush)
router.get("/userInfor", ctrl.output.userInfor)
router.get("/certification", ctrl.output.certification)
router.get("/userAdministration", ctrl.output.userAdministration)
router.get("/userAdministrationTotall", ctrl.output.userAdministrationTotall)
////////////poset/////////////////

router.post("/userGoodsKinds", ctrl.process.userGoodsKinds)
router.post("/login", ctrl.process.login)
router.post("/register", ctrl.process.register)
router.post("/logout", ctrl.process.logout)
router.post("/goodsKinds", ctrl.process.goodsKinds)
router.post("/admin", ctrl.process.admin)
router.post("/adminLogin", ctrl.process.adminLogin)
router.post("/adminFee", ctrl.process.adminFee)
router.post("/Kioce", ctrl.process.Kioce)
router.post("/", ctrl.process.index)
router.post("/adminBench", ctrl.process.adminBench)
router.post("/adminTimeAdd", ctrl.process.adminTimeAdd)
router.post("/adminUinfo", ctrl.process.adminUinfo)
router.post("/adminViews", ctrl.process.adminViews)
router.post("/adminControl", ctrl.process.adminControl)
router.post("/newLogin", ctrl.process.newLogin)
router.post("/goodsPush", ctrl.process.goodsPush)
router.post("/userInfor", ctrl.process.userInfor)
router.post("/koko", ctrl.process.koko)
router.post("/logoutTime", ctrl.process.logoutTime)
router.post("/forcibley", ctrl.process.forcibley) 
router.post("/enter", ctrl.process.enter)
router.post("/certification", ctrl.process.certification)
router.post("/nice", ctrl.process.nice)
router.post("/search", ctrl.process.search)
 module.exports = router      
  