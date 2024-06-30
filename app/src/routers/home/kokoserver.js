const  express = require("express");
const  router = express.Router();
const { SolapiMessageService } = require("solapi");
const messageService = new SolapiMessageService("NCS2VWYIUO94SIGY", "JTGRZN7SISY7EGJZOQBZEXATCFEI1AEP");
const fs =  require('fs').promises
const path = require('path')

var crypto = require("crypto");
var axios = require("axios");



// const ADminGoodsKiosk = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminUser/adminGoodsKiosk.json") 
// const UserGoodsKinds = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/database/userGoodsKinds.json") 
// // const AdminNext = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminSetKinds/adminNext.json") 
// const KOKOtime = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/database/kokoTime.json") 

var crypto = require("crypto");
var axios = require("axios");
// router.post("/koko", (req, res) =>{
// //    const benchs = new Benchs(req.body)
// // })

//  setInterval(times, 20001);


function times() {
  console.log("3")

fs. readFile("./src/database/kokotime.json")
.then((data) => {
const datas = JSON.parse(data)

if(datas[0] !== undefined) { 
  const timesend =  datas[0].timeSend
 
  fs. readFile("./src/database/userGoodsKinds.json")
    .then((dats) => { 
     const dataS = JSON.parse(dats)
      if(dataS[0] !== undefined) { 
        const userId = datas.filter(function (addSave) { return addSave.sendName === "fixedDeadine" });

        if(userId[0].timeSend !== undefined) { 
        for(var q = 0; q<dataS.length; q ++) { 
              for(var b = 0; b<dataS[q].UseTime.length; b ++)  {
         
                
            
                
                 var dayss = Math.floor(dataS[q].UseTime[b]/1440)
                
                   var tme =  (dataS[q].UseTime[b]%1440) //나머지 분
                 // var day = Math.floor( data[0].UseTime[listInfo]/1400) // 1일
                   var hour =  Math.floor(tme/60) // 시간
                 // var min = tme%60  // 분
                 // consle.log(datas[index].timeSend)
              
               
                       if(userId[0].timeSend > dataS[q].UseTime[b] && dataS[q].koko[b] === "N") {
                        
                        
                        const time =dataS[q].UseTime[b]/60
                           messageService.send({
                             "to": dataS[q].phon,
                             "from": "01029718573",
                                      "kakaoOptions": {
                                        "pfId": "KA01PF240201053925212fFkWt1ESnqq",
                                        "templateId": "KA01TP2402010546287663onuf9g48Ts",
                                        // 치환문구가 없을 때의 기본 형태
                                        "variables": {
                                          "#{NAME}" :`${dataS[q].name}님의`,
                                          "#{time}" : `${dataS[q].UseTime[b]}분`
                                    
                                        }
                                    
                                        // 치환문구가 있는 경우 추가, 반드시 key, value 모두 string으로 기입해야 합니다.
                                        /*
                                        variables: {
                                          "#{변수명}": "임의의 값"
                                        }
                                        */
                                    
                                        // disbaleSms 값을 true로 줄 경우 문자로의 대체발송이 비활성화 됩니다.
                                        // disableSms: true,
                                      }
                                    });
                       
                                   dataS[q].koko[b] = "Y"
                                  
                                   fs.writeFile("./src/database/userGoodskinds.json", JSON.stringify(dataS), (err) => {
                
                                   })  
                                    var now = new Date().toISOString();
                                    // 16진수 64자의 랜덤 값 생성
                                    var genRanHex = size =>
                                      [...Array(size)]
                                        .map(() => Math.floor(Math.random() * 16).toString(16))
                                        .join("");
                                    var salt = genRanHex(64);
                                    var message = now + salt;
                                    var apiKey = "NCS2VWYIUO94SIGY";
                                    var apiSecret = "JTGRZN7SISY7EGJZOQBZEXATCFEI1AEP";
                                    var signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");
                                    
                                    // 생성한 시그니처를 사용하여 API 호출
                                    var uri = `https://api.solapi.com/messages/v4/list?limit=1`;
                                    axios
                                      .get(uri, {
                                        headers: {
                                          Authorization: `HMAC-SHA256 apiKey=${apiKey}, date=${now}, salt=${salt}, signature=${signature}`
                                        }
                                      })
                                      .then(res => {
                                         console.log(res.data, "ok");
                                      })
                                      .catch(error => {
                                        console.log(error.response.data);
                                      });
                       
                                   }
                                 
                                  
                                   
            
           
           }
             
         
      }
       
    }
      }

    })
}

            
                   
                
                  
             

       
     
     

}).catch((err) => console.error(err));






} 

  
module.exports = router 