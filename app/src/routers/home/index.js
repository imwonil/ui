const  express = require("express");
const ctrl = require("./home.ctrl")
const  router = express.Router();
const fs =  require('fs').promises
const path = require('path')





// const ADminGoodsKiosk = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminUser/adminGoodsKiosk.json") 
// const UserGoodsKinds = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/database/userGoodsKinds.json") 
// const AdminNext = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminSetKinds/adminNext.json") 
// const kokoTime = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminSetKinds/kokoTime.json") 

fs.readFile("./src/database/userGoodsKinds.json")
.then((data) => {
  const a = JSON.parse(data);
  
  router.get('/userGoodsKinds', (req, res) => {
    res.sendfile("./src/database/userGoodsKinds.json");
  });
})
.catch((err) => console.error(err));


fs. readFile("./src/database/first.json")
.then((data) => {
const d = JSON.parse(data)
 
router.get('/certifications', (req,res) =>{
  res.sendfile("./src/database/first.json");
})
}).catch((err) => console.error(err));



router.get("/", ctrl.output.index)
router.get("/register", ctrl.output.register)
router.get("/certification", ctrl.output.certification)
router.get("/newlogin", ctrl.output.newlogin)
router.get("/register", ctrl.output.register)
router.get("/certification", ctrl.output.certification)

////////////poset/////////////////
router.post("/newlogin", ctrl.process.newlogin)
router.post("/register", ctrl.process.register)
router.post("/certification", ctrl.process.certification)
router.post("/",ctrl.process.index)
 module.exports = router      
  