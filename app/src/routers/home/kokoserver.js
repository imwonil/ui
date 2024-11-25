const  express = require("express");
const  router = express.Router();
const { SolapiMessageService } = require("solapi");
const messageService = new SolapiMessageService("NCS2VWYIUO94SIGY", "JTGRZN7SISY7EGJZOQBZEXATCFEI1AEP");
const fs =  require('fs').promises
const path = require('path')
const db = require("../../config/db")
var crypto = require("crypto");
var axios = require("axios");
const moment = require("moment")

var crypto = require("crypto");
var axios = require("axios");


  


  











            
function next20() { //db 모든 loginStart 조회
  return new Promise( async (resolve, reject) => {

    fs.readFile("./src/database/dbUsetime.json")
    .then((data) => {
      const a = JSON.parse(data);
   

  
   
    const DBUseTimeChange =  a

 
           

           for(var i =0; DBUseTimeChange.length>i; i++) {


                   for(var y=0; DBUseTimeChange[i].indexOF.length>y; y++) {
                    const goodsExpire = `UPDATE kakaoAlarm SET UseTime = JSON_SET(UseTime, '$.UseTime[${DBUseTimeChange[i].indexOF[y]}]', ${DBUseTimeChange[i].UseTimeSubtract[y]}) WHERE phon = ?`;
           
                        //  console.log( goodsExpire,"nexT20")
         
                    db.query(goodsExpire, [DBUseTimeChange[i].phon], (err, data) => {
                          if (err) {
                            // 쿼리 실행 중 오류 발생 시 reject 호출
                            return reject(err);
                          }
                          // 쿼리 성공 시 resolve 호출
                         
                        });

                   }  

           }
    

    })

    resolve()
          })
  
}
       
function next18() {

       const DBUseTimeAllData = "SELECT json_extract(UseTime, '$[0]') AS value FROM kakaoAlarm WHERE phon = ?";    
//  const   DBUseTimeChange = await this.DBUseTimeChange()


  
      const DBLoginStart = "SELECT json_extract(loginStart, '$[0]') AS value FROM kakaoAlarm WHERE phon = ?";
      const DBAllPhonData = "SELECT phon FROM kakaoAlarm";  //kakaoAlarm 테이블 에서 전체 길를 알l아냄   
  
      fs.readFile("./src/database/dbUsetime.json")
      .then((data) => {
       const a = JSON.parse(data);
        const DBUseTimeChange =  a
          
          db.query(DBAllPhonData, (err, loginSubtract) => { 
           
               for(var i=0; loginSubtract.length>i; i++ ) {
                // console.log(loginSubtract[i].phon)
              const home = i
              // console.log(home)
              db.query(DBLoginStart, [`${loginSubtract[i].phon}`], (err, datas) => {  
                        
                const dbloginstart=  JSON.parse( datas[0].value)
              
                if(dbloginstart.loginStart !== undefined  ) { 
                
                     for(var opp =0; dbloginstart.loginStart.length>opp; ++opp)  {
                      // console.log(dbloginstart.loginStart.length)
                      if(dbloginstart.loginStart[opp] !== '') {
                   
                          
                            
                        const DBUseTimeData = `SELECT json_extract(UseTime, '$.UseTime[${[opp]}]') AS value FROM kakaoAlarm WHERE phon = ?`; 
                         const kie = opp
                        const nowTime =  moment().format('yyyy-MM-DD hh:mm')
                        const dateB = moment(`${nowTime}`);
                     
              
                             db.query(DBUseTimeData, [`${loginSubtract[home].phon}`],  (err, UseDatas) => {  //db 저장되여 잇는 UseTime 정보를 가져온다
                             
                              const login =   dbloginstart.loginStart[kie]
                             
                               const nexetTime= dateB.diff(login, 'minute')  //사용자가 시작한 시간
                                
                                const dbrt=  JSON.parse( UseDatas[0].value)
                                   
                                const lklk =   Number(dbrt)  - 1
                                   
                                  console.log(dbrt,"kokoserer 125",`${loginSubtract[home].phon}`)
                                
                              //   var kend = DBUseTimeChange.filter(function (addSave) { return addSave.phon === loginSubtract[home].phon});
                              //   if(DBUseTimeChange[0] !== undefined && kend[0] !== undefined && kend[0].UseTimeSubtract[kie] === "" ) {
                              //     console.log(kend[0].phon)
                              //       console.log(kend[0].UseTimeSubtract[kie])
                                  
                                 
                                
                           
                              //  }
                                // console.log(nexetTime,"dbrt")
                                  //  console.log(lklk,"lklk")
                           const usePhon =   loginSubtract[home].phon
                           const goodsExpire = `UPDATE kakaoAlarm SET UseTime = JSON_SET(UseTime, '$.UseTime[${[kie]}]', ${lklk}) WHERE phon = ?`;
                                    
                          //  console.log( goodsExpire)   
            
                       db.query(goodsExpire, [usePhon], (err, data) => {
                           
                             // 쿼리 성공 시 resolve 호출
                            
                           }); 
                            
                             var lie = DBUseTimeChange.filter(function (addSave) { return addSave.phon === usePhon });
                            
                                lie[0].indexOF[kie] = kie, lie[0].UseTimeSubtract[kie] =  lklk
              
                   
                             
                                

                                  //  fs.writeFile('./src/database/dbUsetime.json', JSON.stringify(DBUseTimeChange), (err) => {
                                  //   if (err) {
                                  //     console.error('파일 쓰기 중 에러 발생:', err);
                                  //   } else {
                                  //     console.log('파일 쓰기 성공!');
                                  //   }
                                  // })

                               
               
                    
            // fs.writeFile('./src/database/dbUsetime.json', JSON.stringify(lie[0]), (err) => {
            //   if (err) {
            //     console.error('파일 쓰기 중 에러 발생:', err);
            //   } else {
            //     console.log('파일 쓰기 성공!');
            //   }
            // })
                     
         
                        });  
                         
                       
                       
                      }
                    
                     }                
                          
                     
                }
               
              })
              
               }
      
                    
              
             
            });          


          });

  
  
         

                
     
}




//  next18()
 setInterval(nexetTime, 10000);
function nexetTime() { 
  //next20() 
    next18()

  //  next18().then(( )  => {return  next20() })  
}

module.exports = router   