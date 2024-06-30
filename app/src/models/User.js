const UserStorage = require( "../models/UserStorage")
const fs =  require('fs').promises
class User {
 
constructor(body) {
this.body = body


}
async login(){
  const client = this.body
  
  
  const {id, psword} = await UserStorage.getUserInfo(client.id)

  if(id){
    
    
      if(client.id === id &&   client.psword === psword ){
        await UserStorage.As(client)
        // return fs.
        // readFile("./src/database/userGoodsKinds.json")
        // .then((data) => {
        //   const userGoodsKinds = JSON.parse(data)
        //   var kend = userGoodsKinds .filter(function (addSave) { return addSave.id === id });
         
        //   return kend
        // }).catch((err) => console.error(err))  
      
    return {success: true} 
      
  }
  return {success: false , msg : "비밀번호가 틀립"}
  }
  return {success: false , msg : "아이디가 다릅니다.."}
  }

async register(){
const client = this.body


  const response = await UserStorage.save(client)
  return response 

  

  
}

   
     async rss() {
      const client = this.body


    
      
    
  }
   loguttime() {
     
     const client =this.body 
     const a =UserStorage.logouttimes(client) 
      return a
    }
        
 async loca(){
const client = this.body
 
   
const {id, psword}  = await UserStorage.getUserInfo(client.id)


  if(client.id === id && client.noName !== "username" && client.psword !== psword  ) {
           return {success: false , msg: "비밀번호를 확인 하세요"}
    
        }else if(client.id !== id && client.noName !== "username" &&client.psword === psword) { 
           return  {success: false , msg: "아이디를 확인해주세요"} 

              }
                else if(client.id !== id && client.noName === "username" && client.psword !== psword){
                      
                      return client.noName
                    }
                    else if(client.id === id && client.noName !== "username" && client.psword === psword) {
                   
                      const client =this.body 
                       const a = await UserStorage.locaUser(client)
                      return  {a , success:true}
                    }     else if(client.id !== id && client.noName !== "username" && client.psword !== psword) {
                   
                      return  {success: false , msg: "아이디와 비번을 확인해주세요"} 
                  }
                }
      

   async certiFication() { 
    const client = this.body
    const a =  UserStorage.Certification(client)
    return a
     }
 
}
module.exports = User;

