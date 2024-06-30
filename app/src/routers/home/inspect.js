// // const  express = require("express");
// // const  router = express.Router();
// // const fs =  require('fs').promises
// // const moment = require("moment")


// // var crypto = require("crypto");
// // var axios = require("axios");


// // const { SolapiMessageService } = require("solapi");
// // const messageService = new SolapiMessageService("NCS2VWYIUO94SIGY", "JTGRZN7SISY7EGJZOQBZEXATCFEI1AEP");

// // const path = require('path')




// // const ADminGoodsKiosk = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminUser/adminGoodsKiosk.json") 
// // const UserGoodsKinds = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/database/userGoodsKinds.json") 
// // const AdminNext = path.join("/home/hosting_users/emc22wonil2/apps/emc22wonil2_emc33wonil/src/adminSetKinds/adminNext.json") 


//  setInterval(inspect, 60000);
// inspect()
// function inspect() { 
 
// fs. readFile("./src/database/userGoodsKinds.json")
// .then((data) => {
 
// const userGoodsKinds = JSON.parse(data)

// const nowTime =  moment().format('yyyy-MM-DD hh:mm')

// function  next(){
//   return new Promise((resolve, reject) => {
//     console.log("1")
//   if(resolve) {
      
//      userGoodsKinds.forEach((itme, index) => {
//                 itme.UseTime.forEach((useTime, inde) => {
                 
//                   if(useTime !=="" && itme.loginStart[inde] !== ""){
                    
//                          const nowTime =  moment().format('yyyy-MM-DD hh:mm')
//                           const dateB = moment(`${nowTime}`);
//                           const login =   userGoodsKinds[index].loginStart[inde]
                           
//                            const nexetTime= dateB.diff(login, 'minute')
                
                                    
//                           const kk = userGoodsKinds[index].UseTime[inde] - nexetTime
                       
                         
//                           userGoodsKinds[index].UseTime[inde] = kk
//                           userGoodsKinds[index].loginStart[inde] = nowTime
//                           userGoodsKinds[index].loginStart[inde] = nowTime
//                           console.log(userGoodsKinds[index].id)
                  

//                   }
            

//                 })


//      })
  
  
   
//       resolve();

//   }else { reject("err")  } 

  
// })




// }
// function  next_2() {
//   return new Promise((resolve, reject) => {
  
//   console.log("2")
//     if(userGoodsKinds[0].loginStart !== "") { 
     
//   if(resolve) {
     
//     for(var q = 0; q<userGoodsKinds.length; q ++) {
      
//       for(var b = 0; b<userGoodsKinds[q].UseTime.length; b ++)  {
   
       
             
//             if(userGoodsKinds[q].expiryName[b] < nowTime   ) {
//               console.log('expiryNam')
    
//               userGoodsKinds[q].wonset.splice([b],1)
//               userGoodsKinds[q].UseTime.splice([b],1)
//               userGoodsKinds[q].loginStart.splice([b],1)
//               userGoodsKinds[q].goodsName.splice([b],1) 
//               userGoodsKinds[q].benchName.splice([b],1)
//               userGoodsKinds[q].expiryName.splice([b],1)
//               userGoodsKinds[q].logoutEnd.splice([b],1)
//               userGoodsKinds[q].koko.splice([b],1)
//               fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(userGoodsKinds) , 'utf8' , (err) => {
//                 if (err) throw err;
//                    console.log("err") 
                   
//                  })
//                 }else if( userGoodsKinds[q].UseTime[b] < 0 ) {
//                   console.log('UseTimesss')
//                   userGoodsKinds[q].wonset.splice([b],1)
//                   userGoodsKinds[q].UseTime.splice([b],1)
//                   userGoodsKinds[q].loginStart.splice([b],1)
//                   userGoodsKinds[q].goodsName.splice([b],1) 
//                   userGoodsKinds[q].benchName.splice([b],1)
//                   userGoodsKinds[q].expiryName.splice([b],1)
//                   userGoodsKinds[q].logoutEnd.splice([b],1)
//                   userGoodsKinds[q].koko.splice([b],1)
           
//                   fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(userGoodsKinds) , 'utf8' , (err) => {
//                     if (err) throw err;
//                        console.log("err") 
                       
//                      })
//                 }
         
 
        
//       }
     
//     }
     

//     }
 
//        resolve();
    
//   }else { 
//     reject("err")
//   } 



// })

// }
// function next_3() {
//   console.log("3")

// fs. readFile("./src/database/kokoTime.json")
// .then((kokoData) => {
// const KOKODATA = JSON.parse(kokoData)

// if(KOKODATA[0] !== undefined) { 
//   const timesend =  KOKODATA[0].timeSend
 
  
    
//       if(userGoodsKinds[0] !== undefined) { 
//         const userId = KOKODATA.filter(function (addSave) { return addSave.sendName === "fixedDeadine" });

//         if(userId[0].timeSend !== undefined) { 
         
//         for(var q = 0; q<userGoodsKinds.length; q ++) { 
//               for(var b = 0; b<userGoodsKinds[q].UseTime.length; b ++)  {
         
                
            
                
//                  var dayss = Math.floor(userGoodsKinds[q].UseTime[b]/1440)
                
//                    var tme =  (userGoodsKinds[q].UseTime[b]%1440) //나머지 분
//                  // var day = Math.floor( userGoodsKinds[0].UseTime[listInfo]/1400) // 1일
//                    var hour =  Math.floor(tme/60) // 시간
//                  // var min = tme%60  // 분
//                  // consle.log(userGoodsKinds[index].timeSend)
              
               
//                        if(userId[0].timeSend > userGoodsKinds[q].UseTime[b] && userGoodsKinds[q].koko[b] === "N") {
                        
                        
//                         const time =userGoodsKinds[q].UseTime[b]/60
//                            messageService.send({
//                              "to": userGoodsKinds[q].phon,
//                              "from": "01029718573",
//                                       "kakaoOptions": {
//                                         "pfId": "KA01PF240201053925212fFkWt1ESnqq",
//                                         "templateId": "KA01TP2402010546287663onuf9g48Ts",
//                                         // 치환문구가 없을 때의 기본 형태
//                                         "variables": {
//                                           "#{NAME}" :`${userGoodsKinds[q].name}님의`,
//                                           "#{time}" : `${userGoodsKinds[q].UseTime[b]}분`
                                    
//                                         }
                                    
//                                         // 치환문구가 있는 경우 추가, 반드시 key, value 모두 string으로 기입해야 합니다.
//                                         /*
//                                         variables: {
//                                           "#{변수명}": "임의의 값"
//                                         }
//                                         */
                                    
//                                         // disbaleSms 값을 true로 줄 경우 문자로의 대체발송이 비활성화 됩니다.
//                                         // disableSms: true,
//                                       }
//                                     });
                       
//                                     userGoodsKinds[q].koko[b] = "Y"
                                 
//                                     fs.writeFile("./src/database/userGoodskinds.json", JSON.stringify(userGoodsKinds), (err) => {
                
//                                     })  
//                                     var now = new Date().toISOString();
//                                     // 16진수 64자의 랜덤 값 생성
//                                     var genRanHex = size =>
//                                       [...Array(size)]
//                                         .map(() => Math.floor(Math.random() * 16).toString(16))
//                                         .join("");
//                                     var salt = genRanHex(64);
//                                     var message = now + salt;
//                                     var apiKey = "NCS2VWYIUO94SIGY";
//                                     var apiSecret = "JTGRZN7SISY7EGJZOQBZEXATCFEI1AEP";
//                                     var signature = crypto.createHmac("sha256", apiSecret).update(message).digest("hex");
                                    
//                                     // 생성한 시그니처를 사용하여 API 호출
//                                     var uri = `https://api.solapi.com/messages/v4/list?limit=1`;
//                                     axios
//                                       .get(uri, {
//                                         headers: {
//                                           Authorization: `HMAC-SHA256 apiKey=${apiKey}, date=${now}, salt=${salt}, signature=${signature}`
//                                         }
//                                       })
//                                       .then(res => {
//                                         //  console.log(res.data, "ok");
//                                       })
//                                       .catch(error => {
//                                         console.log(error.response.data);
//                                       });
                       
//                                    }
                                 
                                  
                                   
            
           
//            }
             
         
//       }
       
//     }
//       }

  
// }

            
                   
                
                  
             

       
     
     

// }).catch((err) => console.error(err));






// } 
// next().then(( )  => { return  next_2() })  
//         .then(() =>{ return next_3()})
//          console.log(userGoodsKinds,"kinds")
// })
 

// }

  
// module.exports = router 