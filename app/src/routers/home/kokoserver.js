const  express = require("express");
const  router = express.Router();
const { SolapiMessageService } = require("solapi");
const messageService = new SolapiMessageService("NCS2VWYIUO94SIGY", "JTGRZN7SISY7EGJZOQBZEXATCFEI1AEP");
const fs =  require('fs').promises
const path = require('path')
const db = require("../../config/db")
const moment = require("moment")





            
function next20() { // db UseTime 정보의 길이가 0 이면 데이블 삭제 


    console.log("db UseTime 정보의 길이가 0 이면 데이블 삭제 ")

          


 
     const DBAllPhonData = "SELECT phon FROM kakaoAlarm";  //kakaoAlarm 테이블 에서 전체 길를 알l아냄   
     const DBUseTimeData = `SELECT UseTime AS value FROM kakaoAlarm WHERE phon = ?`; // 특정 전화번화에 UseTime datas
     const DeleteDB = `DELETE FROM kakaoAlarm WHERE phon = ?`;
     return new Promise( async (resolve, reject) => {
    
         db.query(DBAllPhonData, (err, DBallPhon) => { 
          
              for(var i=0; DBallPhon.length>i; i++ ) {
              
             const DBallphonLengthCounter = i
                   db.query(DBUseTimeData, [`${DBallPhon[DBallphonLengthCounter].phon}`],  (err, UseDatas) => {  //db 저장되여 잇는 UseTime 정보를 가져온다
                                    const DBUserUseTime=  JSON.parse( UseDatas[0].value)
                                 
                                  if(DBUserUseTime.UseTime !== undefined  && DBUserUseTime.UseTime.length <= 0) {
                                    
                                   
                                   
                                    db.query(DeleteDB, [DBallPhon[DBallphonLengthCounter].phon], (err, data) => {
                                       
                                       
                                    });
                        
                                  }
                      
                    
        
                       });  
                        
                      
                    
                   
            }
            
           });          



 
           resolve();
          

       })          
    



}



function next22() {  //db UseTime <0 경우 데이터 삭제

  console.log("db UseTime <0 경우 데이터 삭제")


     const DBLoginStart = "SELECT json_extract(loginStart, '$[0]') AS value FROM kakaoAlarm WHERE phon = ?";
     const DBAllPhonData = "SELECT phon FROM kakaoAlarm";  //kakaoAlarm 테이블 에서 전체 길를 알l아냄   
     const DBUseTimeData = `SELECT UseTime AS value FROM kakaoAlarm WHERE phon = ?`; 
   
     return new Promise( async (resolve, reject) => {
 
     
         
      db.query(DBAllPhonData, (err, DBallPhon) => { 
           
        for(var i=0; DBallPhon.length>i; i++ ) {
         
       const DBallphonLengthCounter = i

       db.query(DBUseTimeData, [`${DBallPhon[DBallphonLengthCounter].phon}`], (err, datas) => {

            const DBUSETime = JSON.parse(datas[0].value)
             
            if(DBUSETime.UseTime !== undefined) {
                 DBUSETime.UseTime.forEach((item, index) => {
                  const indexOf= index
                          console.log(item,"index",DBallPhon[DBallphonLengthCounter].phon,indexOf)
                            if( item < 0) {
                     
const DBUseTimeRemove = `UPDATE kakaoAlarm SET UseTime = JSON_REMOVE(UseTime, '$.UseTime[${[index]}]') WHERE phon = ?`;
db.query(DBUseTimeRemove, [DBallPhon[DBallphonLengthCounter].phon], (err, data) => { 
const DBLoginStartRemove = `UPDATE kakaoAlarm SET loginStart = JSON_REMOVE(loginStart, '$.loginStart[${[index]}]') WHERE phon = ?`;
 console.log("useTime<0 경우",`${DBallPhon[DBallphonLengthCounter].phon}`)


           

  db.query(DBLoginStartRemove, [DBallPhon[DBallphonLengthCounter].phon], (err, data) => { 
     }) 

 })
 fs.readFile("./src/database/userGoodsKinds.json")
 .then((data) => { 
    const DATA = JSON.parse(data)
  
 
    

 const userGoodsKinds = DATA.filter(function (addSave) { return addSave.phon === `${DBallPhon[DBallphonLengthCounter].phon}` });
         
  userGoodsKinds[0].wonset.splice(index,1)
  userGoodsKinds[0].UseTime.splice(index,1)
  userGoodsKinds[0].loginStart.splice(index,1)
  userGoodsKinds[0].goodsName.splice(index,1) 
  userGoodsKinds[0].benchName.splice(index,1)
  userGoodsKinds[0].expiryName.splice(index,1)
  userGoodsKinds[0].logoutEnd.splice(index,1)
  userGoodsKinds[0].koko.splice(index,1)

  fs.writeFile("./src/database/userGoodsKinds.json", JSON.stringify(DATA) , 'utf8' , (err) => {
    if (err) throw err;
       console.log("err") 
       
     })   

    })

                            }

                 })

            }

  
        })
      
       db.query(DBLoginStart, [`${DBallPhon[i].phon}`], (err, datas) => {  
                 
         const dbloginstart=  JSON.parse( datas[0].value)
        
         if(dbloginstart.loginStart !== undefined  ) { 
         
              for(var y =0; dbloginstart.loginStart.length>y; ++y)  {
               
               if(dbloginstart.loginStart[y] !== '') {
            
                const loginStartArrCounter = y                                  
                          console.log(loginStartArrCounter,"j")
                 const DBUseTimeData = `SELECT json_extract(UseTime, '$.UseTime[${[loginStartArrCounter]}]') AS value FROM kakaoAlarm WHERE phon = ?`; 
                          
       
                      db.query(DBUseTimeData, [`${DBallPhon[DBallphonLengthCounter].phon}`],  (err, UseDatas) => {  //db 저장되여 잇는 UseTime 정보를 가져온다
                       const usePhon =   DBallPhon[DBallphonLengthCounter].phon
                     
                           
                         const DBUserUseTime=  JSON.parse( UseDatas[0].value)
                       
                         console.log(DBUserUseTime,DBallPhon[DBallphonLengthCounter].phon)
                           console.log(DBUserUseTime)
                          if(DBUserUseTime < 0) {

                  const DBUseTimeRemove = `UPDATE kakaoAlarm SET UseTime = JSON_REMOVE(UseTime, '$.UseTime[${[loginStartArrCounter]}]') WHERE phon = ?`;
                  const DBLoginStartRemove = `UPDATE kakaoAlarm SET loginStart = JSON_REMOVE(loginStart, '$.loginStart[${[loginStartArrCounter]}]') WHERE phon = ?`;
                  console.log(   `${DBallPhon[i].phon}`,                 )

 db.query(DBLoginStartRemove, [DBallPhon[DBallphonLengthCounter].phon], (err, data) => { 
   }) 
         }

                      
                        });  
                  
                
                
               }
             
              }                
                   
              
         }
        
       })
       
        }

             
       
      
     });           

        


 
 
         resolve()

       })          
    



}   
  
function next18() {  //logninStart 상태에서 1분씩 UseTime 차감 함

  console.log("logninStart 상태에서 1분씩 UseTime 차감 함")


  
      const DBLoginStart = "SELECT json_extract(loginStart, '$[0]') AS value FROM kakaoAlarm WHERE phon = ?";
      const DBAllPhonData = "SELECT phon FROM kakaoAlarm";  //kakaoAlarm 테이블 에서 전체 길를 알l아냄   
      return new Promise( async (resolve, reject) => {
      fs.readFile("./src/database/userGoodsKinds.json")
      .then((data) => {
       const a = JSON.parse(data);
        const DBUseTimeChange =  a
          
          db.query(DBAllPhonData, (err, DBallPhon) => { 
           
               for(var i=0; DBallPhon.length>i; i++ ) { 
               
              const DBallphonLengthCounter = i
             
              db.query(DBLoginStart, [`${DBallPhon[i].phon}`], (err, datas) => {  
                        
                const dbloginstart=  JSON.parse( datas[0].value)
             
                if(dbloginstart.loginStart !== undefined  ) { 
                
                     for(var y =0; dbloginstart.loginStart.length>y; ++y)  {
                      
                      if(dbloginstart.loginStart[y] !== '') {
                   
                          
                            
                        const DBUseTimeData = `SELECT json_extract(UseTime, '$.UseTime[${[y]}]') AS value FROM kakaoAlarm WHERE phon = ?`; 
                         const loginStartArrCounter = y
                        const nowTime =  moment().format('yyyy-MM-DD hh:mm')
                        const dateB = moment(`${nowTime}`);
                     
              
                             db.query(DBUseTimeData, [`${DBallPhon[DBallphonLengthCounter].phon}`],  (err, UseDatas) => {  //db 저장되여 잇는 UseTime 정보를 가져온다
                              const usePhon =   DBallPhon[DBallphonLengthCounter].phon
                              const login =   dbloginstart.loginStart[loginStartArrCounter]
                             
                               const nexetTime= dateB.diff(login, 'minute')  
                                
                                const DBUserUseTime=  JSON.parse( UseDatas[0].value)
                               
                                var lie = DBUseTimeChange.filter(function (addSave) { return addSave.phon === usePhon });
                            
                               
                                const lklk =   Number(lie[0].UseTime[loginStartArrCounter])  - Number(nexetTime)
                                   
         
                           const goodsExpire = `UPDATE kakaoAlarm SET UseTime = JSON_SET(UseTime, '$.UseTime[${[loginStartArrCounter]}]', ${lklk}) WHERE phon = ?`;
                                    
                          
            
                       db.query(goodsExpire, [usePhon], (err, data) => {
                           
                            
                            
                           }); 
                            
                             
                 
         
                        });  
                         
                       
                       
                      }
                    
                     }                
                          
                     
                }
               
              })
              
               }
      
                    
              
             
            });          


          });

  
  
         

        })          
     
}

  // next20()


   setInterval(nexetTime, 10000);
function nexetTime() { 
  
   

  next20().then(() => {return next22()}) 
          .then(() => {return next18()})
                   
}

module.exports = router   