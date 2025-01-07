"use strict"

//240711 업데이트 입실 로직
//checkin이 로그인 버튼 눌렀을 때 나타나는 입실 관련 모달창
// fetch('http://3.38.152.166:3000/adminGoodsKiosk')
// .then(res => res.json())
// .then(data => { 
// console.log(data,"data")
// })

const warningModal = document.querySelector(".warning-modal")
const warningModalText = document.querySelector(".warning-modal-text")

  const sucModal = document.querySelector(".suc-modal")
  const sucModalText = document.querySelector(".suc-modal-text")

  const  changeModal = document.querySelector(".change-modal")

const checkin = document.querySelector(".checkin-modal")
const checkinExit = document.querySelector(".checkin-exit")
const keyboardContainer = document.querySelector(".keyboard-container")
const userDetailsModal = document.querySelector(".user-details-modal")

//240711 업데이트 퇴실 로직

//checkout이 로그아웃 버튼 눌렀을 때 나타나는 퇴실 관련 모달창
const checkout = document.querySelector(".checkout-modal")
const checkoutExit = document.querySelector(".checkout-exit")

const loginSection = document.querySelector(".login-section")
const findAnchor = document.querySelectorAll(".find-anchor")
// const regiModal = document.querySelector(".regi-modal")
const findModal = document.querySelector(".find-modal")
const feather = document.querySelector(".feather")
const findExit = document.querySelector(".find-exit")

/**아이디/비번 찾기랑 회원가입 모달 각각 끄는 방법 */


/**X 눌렀을 때 아이디/비밀번호 찾기 및 퇴실 창 제거 */
findExit.addEventListener("click", ()=>{

   findModal.classList.toggle("hidden")

})


const id = document.querySelectorAll(".id")
const psword = document.querySelectorAll(".password")


const tab = document.querySelectorAll(".tab")
const tabs = [...tab]
const logoutPhone= document.querySelector("#logoutPhone")
const logoutPassword = document.querySelector("#logoutPassword")
const logoutButton = document.querySelector("#logoutButton")


const body = document.querySelector("body")

const footer = document.querySelector(".footer")

 const PHONE = document.querySelector("#PHONE"),  // 로그인 value id 값 html. 123 line
       PSWORD = document.querySelector("#PSWORD"), // 로그인 value id 값 html 126 line 
       BUTTON = document.querySelector("#BUTTON")


// 아이디/비번찾기 모달 생성


findAnchor.forEach((ele)=>{
  ele.addEventListener("click", ()=>{


         findModal.classList.toggle("hidden")



    // idx를 6으로 함으로써 모달의 첫번째 칸에 커서가 들어간다. 
    idx = 6;
    info[idx].focus();


         fetch('/users')
       .then(res => res.json())
       .then(data => {

        const S_N   = document.querySelector("#searchName")
        const S_P = document.querySelector("#searchPhone")
        const S_S = document.querySelector("#searchSend")
        const con_bu = document.querySelector("#confirm")
           const certification= document.querySelector("#certification")
        S_S.addEventListener("click",search)
        function search() {

          const userIndex = data.phon.indexOf(S_P.value)  
          const PhoneInclude =  data.phon.includes(S_P.value)
          const NameInclude =  data.name.includes(S_N.value)
          const userNameindex =  data.name.indexOf(S_N.value)
          const userPhoneindex = data.phon.indexOf(S_P.value)

           const UsersNAME =   data.name[userNameindex]
           const UsersPHONE = data.phon[userNameindex]



       if(userNameindex !== userPhoneindex){

         warningModalText.innerHTML = "전화번호와 이름이 다릅니다."
          warningModal.classList.toggle("hidden")

          setTimeout(() => {
            //  sucModal.classList.toggle("hidden")
            warningModal.classList.toggle("hidden")

         }, 2000);
          return
       }

                   else if(!PhoneInclude) {

                       warningModalText.innerHTML = "전화번호가 존재하지 않습니다."
                     warningModal.classList.toggle("hidden")
                     setTimeout(() => {
                      //  sucModal.classList.toggle("hidden")
                      warningModal.classList.toggle("hidden")

                   }, 2000); 
                     return
                   }
                        else if((!NameInclude)){




                            warningModalText.innerHTML = "존재하지 않는 이름입니다."
                           warningModal.classList.toggle("hidden")
                           setTimeout(() => {
                            //  sucModal.classList.toggle("hidden")
                            warningModal.classList.toggle("hidden")

                         }, 2000);
                        return
                        }
                 const nowTimeSS = moment().format('ss')
                 const comb = S_P.value.substr(9, 10)
                 const combination =  nowTimeSS + comb 

                 const req = {
                  phon: S_P.value,
                  id :data.id[userIndex],
                  name :S_N.value,
                  psword:data.psword[userIndex],
                  conmbination : combination 


                 }


          sucModalText.innerHTML = "인증번호 전송하였습니다."
          sucModal.classList.toggle("hidden")



            fetch("/search", {
              method: "POST",
              headers : {
                "Content-Type" :"application/json"
              },

               body: JSON.stringify(req),
              })
              .then((res => res.json()))
              .then((res) => {

                console.log(res)
                con_bu.addEventListener("click", CONFIRM) 
                setTimeout(() => {

                  sucModal.classList.toggle("hidden") // 인증번호 전송 하였습니다

               }, 2000); 
                function CONFIRM() {

                 if(certification.value === res.search) {
            const C_P = document.querySelector("#changPhone")
            const C_PS = document.querySelector("#changPsword")
            const C_C_P = document.querySelector("#changConfirm-psword")
            const C_B = document.querySelector("#changButton")
                       changeModal.classList.toggle("hidden")
                       findModal.classList.toggle("hidden")


         fetch('/users')
         .then(res => res.json())
         .then(data => { 
      console.log(data)

        C_B.addEventListener("click", changeSEND)

        function changeSEND () {
          const S_P =    data.phon.includes(C_P.value)
          // const S_P =    data.phon.indexOf(C_P.value)
           console.log(C_P.value)
           console.log(C_PS.value)
           console.log(C_C_P.value)


            const req = {


              phon : C_P.value,
              psword: C_PS.value,
              Certification:"CertificationChange"



           }
           console.log(C_P.value , res.phone)
    if(C_P.value !== res.phone) { 
    warningModalText.innerHTML = "등록된 전화번호가 다릅니다."
    warningModal.classList.toggle("hidden")

    setTimeout(() => {

      warningModal.classList.toggle("hidden")

   }, 2000);
  return
  }
         if(S_P === false) {
          warningModalText.innerHTML = "전화번호가 다릅니다."
          warningModal.classList.toggle("hidden")

          setTimeout(() => {

            warningModal.classList.toggle("hidden")

         }, 2000);
        return

         }


          // if(C_PS.value !== C_C_P.value) {

          //   warningModalText.innerHTML = "비밀번호가 일치하지 않습니다."
          //   warningModal.classList.toggle("hidden")


          //   setTimeout(() => {

          //     warningModal.classList.toggle("hidden")

          //  }, 2000);
          // return

          // } 
          if(!C_PS.value) { warningModalText.innerHTML = "비밀번호를 설정 하세요."
          warningModal.classList.toggle("hidden") 
          setTimeout(() => {

            warningModal.classList.toggle("hidden")

         }, 2000);
        return
        }
            if(S_P === true) {


    fetch("/register", {
      method: "POST",
      headers : {
        "Content-Type" :"application/json"
      },

       body: JSON.stringify(req),
      })
      .then((res => res.json()))
      .then((res) => {  

    if(res.success === true){ 


      sucModalText.innerHTML = "비밀번호가 수정 되었습니다."
      sucModal.classList.toggle("hidden")
      setTimeout(() => {
           location.href = "/login"
          sucModal.classList.toggle("hidden") // 임시로 해둠 location.href 활성화시 삭제 및 주석 처러함
     }, 2000);


  }
      })



            }

        }

         })


                  }

                  if(certification.value !== res.search) {





                      warningModalText.innerHTML = "인증번호가 일치 하지 않습니다."
                       warningModal.classList.toggle("hidden")
                       setTimeout(() => {

                        warningModal.classList.toggle("hidden")

                     }, 2000);

                     return
                  }

                }

               })
        }

          })
       })
    })




const m = moment().format('yyyyMMDDhhmm')
const nowTime = moment().format('yyyyMMDDhhmm')

BUTTON.addEventListener("click", LOGINBUTTON) 


function LOGINBUTTON () {

  const a = document.querySelector("#PHONE").setAttribute("placeholder", `username${PHONE.value}`)
  const b = document.querySelector("#PHONE").getAttribute("placeholder")
  const req = {
    phon: PHONE.value,
    psword: PSWORD.value,
    loginStart: nowTime,
    noName: b
  };




  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),

  }).then((res) => res.json())
    .then((res) => {
  console.log(res)

    if(res.id !== undefined) {
      function  next(){
        return new Promise((resolve, reject) => {
          console.log("1")
        if(resolve) {

          sucModalText.innerHTML =`${req.phon} 반갑습니다 :)`
          sucModal.classList.toggle("hidden")
          setTimeout(() => {

           sucModal.classList.toggle("hidden")


         }, 1300); 


            resolve();

        }else { reject("err")  } 


      })




      }
      function  next2(){
        return new Promise((resolve, reject) => {
          console.log("1")
        if(resolve) {

          setTimeout(() => {
            checkin.classList.toggle("hidden");

            // keyboardContainer.classList.toggle("blur")

          }, 1200);

            resolve();

        }else { reject("err")  } 


      })




      }
      next().then(( )  => {return  next2()})  
        //  .then(() =>{ return next2()})




      // sucModalText.innerHTML =`${req.phon} 방갑습니다 :)`
      //  sucModal.classList.toggle("hidden")
      //  setTimeout(() => {

      //   sucModal.classList.toggle("hidden")


      // }, 1600); 

      /*입실(checkin-anchor)을 눌렀을 때 checkin 모달창 열림 */
      // setTimeout(() => {
      //   checkin.classList.toggle("hidden");
      //   loginSection.classList.toggle("blur")
      //   // keyboardContainer.classList.toggle("blur")

      // }, 2000);


      if(res.goodsName.length === 0 ) {
        console.log("po")
      }


      fetch('/userGoodsKindspayment')
      .then(res => res.json())
      .then( data => { 

        const  Niceinformation = data.filter(function (niceCard) { return niceCard.phon === res.phon });
        console.log()
      for(var i = 0; res.goodsName.length>i; i++) {
        var time =  (res.UseTime[i]%1440) //나머지 분
        var hour =  Math.floor(time/60) // 시간



      var day = Math.floor( res.UseTime[i]/1400) // 1일
      var hour =  Math.floor(time/60) // 시간
      var min = time%60  // 분
      var hours =  Math.floor(res.UseTime[i]/60)

      var mon = Math.floor( time/60)
      console.log(day,"day")
      console.log(hour,"hour")
      console.log(min,"min")

         const useSet = document.getElementById("useSet")
      const div = document.createElement('div')
      const div2 = document.createElement('div')
      const span = document.createElement("span")
      const span2 = document.createElement("span")
      const span3 =  document.createElement("span")
      const span4 =  document.createElement("span")
      const span5 =  document.createElement("span")
      const  B = document.createElement('b') 

       useSet.appendChild(div)

       div.appendChild(span)

       div.appendChild(div2)



      span.className="px-2 text-xs font-semibold leading-[48px] text-green-800 bg-red-100 rounded-full"       
      span3.className="px-4 text-xs font-semibold leading-[48px] text-cyan-800 bg-cyan-200 rounded-md ml-5"
      span4.className="px-4 text-xs font-semibold leading-[48px] text-teal-800 bg-teal-200 rounded-md ml-5"
      span5.className="px-4 text-xs font-semibold leading-[48px] text-slate-800 bg-slate-200 rounded-md ml-5"

      div2.appendChild(B)
      div2.appendChild(span2)


      div.appendChild(span3)
      div.appendChild(span4)
      div.appendChild(span5)

      const UserName = document.querySelector("#UserName").innerText=`상품선택  -    ${res.id}님`

        span.innerText=""   // 상품 명

        B.innerHTML=`${res.goodsName[i]}`       // 상품 명

        span2.innerHTML=`잔여 시간 ${day}일 ${hour}시간 ${min}분 `  //남은 시간

         if(res.wonset[i] === '') {
         span3.innerHTML="미사용"
         span4.innerHTML= "자리선택"
         span4.id= `index${i}`

         span5.value ="cad"

                 }
               if( Niceinformation[0].cancal[i] === "Y" ) {
                console.log("1")
                span5.innerHTML="상품 취소(관리자 승인)"
                span5.id= `index${i}cancel`
               } else if( Niceinformation[0].cancal[i] === "N"  ) {
                console.log("2")
                span5.innerHTML="상품 취소(관리자 문의)"
                span5.id= `index${i}cancel`
               } else {

                span5.innerHTML="상품 취소 불가"
                span5.id= `index${i}cancel`

              }
         if (res.wonset[i] !== ''){
          span3.innerHTML='사용중'
          span4.innerHTML='자리이동'
          span4.id=`index${i}`
          span5.id= `index${i}cancel`
          span5.value ="cad"
        }                // 현자 사용하고 있는 여부






       //  td.innerText =`현재 사용중인 자리 : ${data[0].wonset[i]}  상품:${data[0].goodsName[i]} - ${data[0].benchName[i]} `
       const text=  document.getElementById(`index${i}`).innerText
       const indexID =  document.getElementById(`index${i}`).id
       const cardText=  document.getElementById(`index${i}cancel`).innerText
       const cardCancelindexID =  document.getElementById(`index${i}cancel`).id
       document.getElementById(`index${i}`).onclick = () => {indexFunction(indexID,text )};
       document.querySelector(`#index${i}cancel`).onclick =() =>{cardCancel(cardCancelindexID ,cardText, res.phon)}
      }



    })



    }
    else if (res.success === false) {

      warningModalText.innerHTML = `${res.msg}`
       warningModal.classList.toggle("hidden")
       setTimeout(() => {

        warningModal.classList.toggle("hidden")


      }, 1600); 
      } 

    })



}



function indexFunction(index, text) { //자리 선택 및 자리 이동
  console.log(index, text)

  const regex1 = /[^0-9]/g;
  const result1= index.replace(regex1, "");
  const indexNumber = parseInt(result1);

  sessionStorage.setItem("indexOf",indexNumber)
  location.href = "/"  

   }

//퇴실 로직인데 어디다가 둬야될지 몰라서 그냥 여기둡니다. 
checkoutExit.addEventListener("click", function(){
  /**X 눌렀을 때 아이디/비밀번호 찾기 및 퇴실 창 제거 */
  location.reload(true)
})


/*퇴실(checkout-anchor) 눌렀을 때 checkout 모달창 열림 */
// checkoutAnchor.addEventListener("click", function(){
//   checkout.classList.toggle("hidden");

//   loginSection.classList.toggle("blur")
//   keyboardContainer.classList.toggle("blur")
// })






checkinExit.addEventListener("click", function(){
  /**X 눌렀을 때 아이디/비밀번호 찾기 및 퇴실 창 제거 */
  location.reload(true)
})



/**가상 키보드 부분 **/
const buttons = document.querySelectorAll(".btn");
  const fortis = document.querySelectorAll(".fortis")
 const textarea = document.querySelector("textarea")


 const deleteBtn = document.querySelectorAll(".delete")



 const koShiftBtn = document.querySelector(".ko-shift")
 const enShiftBtn = document.querySelector(".en-shift")


 const spaceBtn = document.querySelectorAll(".space")

 const translate = document.querySelector(".translate")
 const koKeyboard = document.querySelector(".ko-keyboard")
 const enKeyboard = document.querySelector(".en-keyboard")
  const enBtn = document.querySelectorAll(".en-btn")



/**아이디/비밀번호/번호 끝 네자리/비밀번호 앞 두자리/아이디/비밀번호 => 0, 1, 2, 3, 4, 5 
이렇게 새롭게 idx를 매기겠음. info로부터 인덱스를 추출하겠음.*/
const info = document.querySelectorAll(".info")


const infos = [...info]

// const idArr = [...id]
// const psArr = [...psword]
// const tabArr = [...tab]

let idx = 0;
 let arr = [];


info.forEach((ele)=>{
  ele.addEventListener("click", ()=>{

    idx = infos.indexOf(ele)

    if(info[idx].value !== ""){
      arr.length = 0;
      arr = info[idx].value.split("")

    }

   if(info[idx].value == ""){
     arr.length = 0;
   }

  })
})


//innerhtml은 어지간하면 쓸일 없고, innerText나 textContent 쓴다.
//innerText를 써야.. css 스타일이 적용된 상태가 출력된다. 

//innerHTML은 'Element'의 속성으로, element내에 포함 된 HTML 또는 XML 마크업을 가져오거나 태그와 함께 입력하여 내용을 직접 설정할 수 있다.

//innerText 'Element'의 속성으로, element내에서 사용자에게 보여지는 text값들을 가져오거나 설정할 수 있다.

 buttons.forEach((btn)=>{
   btn.addEventListener("click",()=>{

     arr.push(btn.innerText)
     textarea.textContent = Hangul.assemble(arr)
     info[idx].value =  Hangul.assemble(arr)

     })}) 


deleteBtn.forEach((ele)=>{
  ele.addEventListener("click", ()=>{
     arr.pop();
    console.log(ele, info)
     info[idx].value =  Hangul.assemble(arr)
  })
})


spaceBtn.forEach((ele)=>{
  ele.addEventListener("click", ()=>{
      arr.push(" ")
     info[idx].value = Hangul.assemble(arr)
  })
})



koShiftBtn.addEventListener("click", ()=>{
 fortis.forEach(btn=>{
   btn.classList.toggle("hidden")
 })
})


enShiftBtn.addEventListener("click", ()=>{
 enBtn.forEach(btn=>{
   btn.classList.toggle("uppercase")
 })
})


translate.addEventListener("click", ()=>{
 console.log(translate)
 enKeyboard.classList.toggle("hidden")
   koKeyboard.classList.toggle("hidden")
})


//다른 tab을 눌렀을 때 tabIdx는 초기화되고, 고정석인 경우가 0임

let tabIdx = 0;

/**아이디/비밀번호/번호 끝 네자리/비밀번호 앞 두자리/아이디/비밀번호 => 0, 1, 2, 3, 4, 5 
이렇게 새롭게 idx를 매기겠음 */

info[idx].focus();

//tab은 tab 여러개를 querySelectorAll로 가져온 것, 그리고 그것을 forEach로 돌린다.

tab.forEach((ele)=>{  //tab 클릭시 반응하는 함수
  ele.addEventListener("click", ()=>{



    //tab의 매개변수가 ele인 것을 실수하지 말것



    /**수정,
     * 각 탭을 누를 때마다 두개의 플레이스홀더 중 첫번째 플레이스 홀더에
     * 커서가 들어갈 수 있게 focus 매서드를 쓴다.  */
    tabIdx = tabs.indexOf(ele)
    idx = tabIdx * 2

    setTimeout(() => {
        info[idx].focus();
    }, 0); // 현재 이벤트 루프가 완료된 후 실행



     const TAB =  ele.innerText

    if(TAB === "로그아웃") {


      logoutButton.addEventListener("click", logOUT) 

  function logOUT() {

    const req = {

     phon:logoutPhone.value,
     psword:logoutPassword.value,


    }
    console.log(req,"594")

    fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),

    }).then((res) => res.json())
      .then((res) => {

          var conter =0; 
          if(res.id !== undefined) {

            if(res.goodsName.length === "0") {

               warningModal.classList.toggle("hidden")
                warningModalText.innerHTML = "상품이 존재하지 않습니다."


             location.href = "/login"
          }


            /*입실(checkin-anchor)을 눌렀을 때 checkin 모달창 열림 */

              checkin.classList.toggle("hidden");

              // keyboardContainer.classList.toggle("blur") //err 남


            for(var i = 0; res.goodsName.length>i; i++) {
              if(res.wonset[i] !== ''){ conter = +1 


             }

              var time =  (res.UseTime[i]%1440) //나머지 분


            var day = Math.floor( res.UseTime[i]/1400) // 1일
            var hour =  Math.floor(time/60) // 시간
            var min = time%60  // 분
            var hours =  Math.floor(res.UseTime[i]/60)

            var mon = Math.floor( time/60)


               const useSet = document.getElementById("useSet")
            const div = document.createElement('div')
            const div2 = document.createElement('div')
            const span = document.createElement("span")
            const span2 = document.createElement("span")
            const span3 =  document.createElement("span")
            const span4 =  document.createElement("span")
            const span5 =  document.createElement("span")
            const  B = document.createElement('b') 

             useSet.appendChild(div)

             div.appendChild(span)

             div.appendChild(div2)



            span.className="px-2 text-xs font-semibold leading-[48px] text-green-800 bg-red-100 rounded-full"       
            span3.className="px-4 text-xs font-semibold leading-[48px] text-cyan-800 bg-cyan-200 rounded-md ml-5"
            span4.className="px-4 text-xs font-semibold leading-[48px] text-teal-800 bg-teal-200 rounded-md ml-5"
            span5.className="px-4 text-xs font-semibold leading-[48px] text-slate-800 bg-slate-200 rounded-md ml-5"

            div2.appendChild(B)
            div2.appendChild(span2)


            div.appendChild(span3)
            div.appendChild(span4)
            div.appendChild(span5)

            const UserName = document.querySelector("#UserName").innerText=`상품선택  -    ${res.id}님`

              span.innerText=""   // 상품 명

              B.innerHTML=`${res.goodsName[i]}`       // 상품 명

              span2.innerHTML=`잔여 시간 ${day}일 ${hour}시간 ${min}분 `  //남은 시간

               if(res.wonset[i] === '') {
               span3.innerHTML="미사용"
               span4.innerHTML= "자리선택"
               span4.id= `index${i}`


                       }
               if (res.wonset[i] !== ''){
                span3.innerHTML='사용중'
                span4.innerHTML='퇴실 하기'
                span4.id=`indexOut${i}`
                const text=  document.getElementById(`indexOut${i}`).innerText
                const indexID =  document.getElementById(`indexOut${i}`).id
                document.querySelector(`#indexOut${i}`).onclick =() =>{logoutTime(indexID,text)}

              }                // 현자 사용하고 있는 여부




              span5.innerHTML="상품 취소(환불)"

             //  td.innerText =`현재 사용중인 자리 : ${data[0].wonset[i]}  상품:${data[0].goodsName[i]} - ${data[0].benchName[i]} `

            }    
            if(conter === 0) {


             warningModal.classList.toggle("hidden")
             warningModalText.innerHTML = "퇴실할 상품이 없습니다."

               location.href = "/login"
          }

                      }   else if (res.success === false) {  
                        warningModalText.innerHTML = `${res.msg}`
                        warningModal.classList.toggle("hidden")
                        setTimeout(() => {

                          warningModal.classList.toggle("hidden")
                          console.log(res.msg)
                          return
                      }, 2000);

 } 

                      function logoutTime(indexID,text) {

                        const regex1 = /[^0-9]/g;
                        const result1= indexID.replace(regex1, "");
                        const index = parseInt(result1);

                        if (res.loginStart[index] !== "N") {
                          const req = {
                            phone: res.phon,
                            logOutTime: nowTime,
                            index,
                            adminId:"user"
                          };

                          console.log(req)

                          fetch("/logoutTime", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(req),

                          }).then((res) => res.json())
                            .then((res) => {
                                                 if (res.success) {


                                                   sucModalText.innerHTML = "퇴실 처리 되었습니다."
                                                   sucModal.classList.toggle("hidden")

                                location.href = "/login"

                                 }


                                          })
                                       }

                        }




       })


  }




      // fetch("/logoutTime", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(req),

      // }).then((res) => res.json())
      //   .then((data) => { })

    }    if(TAB === "문열기") { 
      console.log("문열기")
    const enterId=document.querySelector("#enterId")
    const enterPassword = document.querySelector("#enterPassword")
    const enterNext = document.querySelector("#enterNext")
enterNext.addEventListener("click", next) 

function next() {

//  const combine= enterId.value + enterPassword.value
 const req = {
  id: enterId.value,
  psword: enterPassword.value
 }

 fetch("/enter", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(req),

}).then((res) => res.json())
  .then((res) => {
    console.log(res)
   if(res.success === true) {

    location.href  = "/login"

   }else if(res.success === false){
      sucModalText.innerHTML = `${res.mag}`
      sucModal.classList.toggle("hidden")


   }else if(res === "goodsfalse") {


      warningModal.classList.toggle("hidden")
       warningModalText.innerHTML = "상품이 존재 하지 않습니다."

       location.href  = "/login"
   }


  })
}

    }

  })
})


function cardCancel(a,b,phon) {
  console.log(a,b,phon)
  const regex = /[^0-9]/g;
  const result = a.replace(regex, "");
  const  index= parseInt(result);
  checkin.classList.toggle("hidden");
  if(b === "상품 취소(관리자 승인)") {

    document.querySelector(".modal").classList.remove("hidden")




   } else if(b === "상품 취소(관리자 문의)") {


    setTimeout(() => {

      alert("관리자에게 문의후 환불 진행주세요")
      location.href = "/login"
   }, 1500);
return
   } else if(b==="상품 취소 불가") {
    setTimeout(() => {

      alert("상품 취소 불가 관리자에게 문의 해주세요")
      location.href = "/login"
   }, 1500);

return
   }


  fetch('/paymentHistory')
.then(res => res.json())
.then(datas => { 
  var Nicename = datas.filter(function (addSave) { return addSave.phon === phon });



         console.log(Nicename[0].approvalDay[index],"승인날짜",  Nicename[0].hangle[index],"할부", Nicename[0].fee[index],"금액" , Nicename[0].approvalNumber[index],"승인번호")

          const approvalDAY =Nicename[0].approvalDay[index].substr(0,6)
          console.log(approvalDAY)


           var TYPE = "VCAT";
           var TYPE2 = "NICEVCAT";
           var FS = '\x1C';
           var H7 = '\x07';
           var sendbuf;
           var iFlag = '0';
          //  document.getElementById("feeName").innerText = `취소 금액 :  ${fee}`

           const seet = document.getElementById('seet');





           console.log(document.getElementById("cancel"),"230")
           const  Button = document.getElementById("cancel").addEventListener("click", handleClick('credit_cancel'))


          function handleClick(myRadio) //카드 결제 information 
          {        
            console.log(myRadio,"myRadiom")

            if(myRadio == 'credit_cancel') //신용취소
            {
              // sendbuf = "NICEVCAT" + H7 + "0420" + FS + "10" + FS + "C" + FS +"1000" + FS + "0" + FS + "0" + FS + "00" + FS + "28700883" + FS + "240321" + FS + "" + FS + FS + FS + FS + "0" + FS + FS + FS + FS + "" + FS + H7;
              sendbuf = "NICEVCAT" + H7 + "0420" + FS + "10" + FS + "C" + FS + Nicename[0].fee[index] + FS + "0" + FS + "0" + FS + Nicename[0].hangle[index] + FS + Nicename[0].approvalNumber[index] + FS + approvalDAY + FS + "" + FS + FS + FS + FS + "0" + FS + FS + FS + FS + "" + FS + H7;
              // sendbuf = "NICEVCAT" + H7 + "0420" + FS + "10" + FS + "C" + FS + data[0].fee[index] + FS +"0" + FS + data[0].hangle[index] + FS + data[0].approvalNumber[index] + FS + data[0].approvalNumber[index] + FS + approvalDAY + FS + "" + FS + FS + FS + FS + "0" + FS + FS + FS + FS + "" + FS + H7;
            }
            console.log(sendbuf,"kiiie")

            // 		else if(myRadio.value == 'credit_cancel') //신용취소
            // {
            // 	sendbuf = "NICEVCAT" + H7 + "0420" + FS + "10" + FS + "C" + FS + form.money.value + FS + form.tax.value + FS + form.bongsa.value + FS + form.halbu.value + FS + form.agreenum.value + FS + form.agreedate.value + FS + form.catid.value + FS + FS + FS + FS + form.myunse.value + FS + FS + FS + FS + "" + FS + H7;
            // }



            form.SendData.value = sendbuf +""+`${Nicename[0].phon}`+""+`${index}`  ;	 // 이정보를 가지고 post 
            console.log(form.SendData.value, "39")		

          }	


        })

}

var TYPE = "VCAT";
var TYPE2 = "NICEVCAT";
var FS = '\x1C';
var H7 = '\x07';
var sendbuf;
var iFlag = '0';
  function reqVCAT_HTTP(myRadio) //VCAT 클릭 이벤트 함수  함수 
  { 	
    var sendMsg;	
    var RecvData;

    form.RecvData.value = "";
    sendMsg = form.SendData.value;	



      if(sendMsg == "REQ_STOP")
      {	

        sendbuf = make_send_data(sendMsg);	


   console.log("333")
        $.ajax
          ({ url         : "http://127.0.0.1:9189"    
           , type        : "POST"
           , dataType    : "text"
           //, timeout     : $("#vanpReqTimeOut").val()
           , data        : encodeURI(sendbuf)
           , success     : function(data) {							
               form.RecvData.value = data;	

           }
        });			 

      }
      else 
      {		
        //요청 시 중복방지로직을 필수로 처리해주세요. 
        if(iFlag == '0')
        {

          console.log("2")

          sendbuf = make_send_data(sendMsg);

          iFlag = '1';

          $.ajax
            ({ url         : "http://127.0.0.1:9188"    
             , type        : "POST"
             , dataType    : "text"				 
             , data        : encodeURI(sendbuf)
             , success     : function(data) {							
              form.RecvData.value = data;							
              iFlag = '0';

              //  if(data.length <= 506) { return alert("결제가 정상적으로 이루워지 않았습니다.")}


              const arr1 = form.RecvData.value.split("",60);
              const arr2 = sendbuf.split("",30)

              console.log(arr1)

         if(arr1[16].length >=10) { alert(arr1[16])}

             const req = {
            phon: arr2[19],
            index:arr2[20]


             }  

              fetch("/paymentHistory", {
                method: "POST",
                headers : {
                  "Content-Type" :"application/json"
                },

                 body: JSON.stringify(req),
                })
                .then((res => res.json()))
                .then((res) => { 

                  alert("결제 취소 되였습니다.")

                  // location = "/login"
                })

             }
             , error       : function(request, status, error) {
              console.log(error )
              if(sendMsg == "RESTART" || sendMsg == "NVCATSHUTDOWN")

              {

                //응답 받지 않아서 예외 처리
              }
              else
                alert('AJAX 통신 실패! NVCAT 실행 여부 확인!');
                console.log("dkkfk")
              iFlag = '0';
             }
          });		
        }
        else	
          alert('버튼 중복 클릭');				
      }


  }			


  function make_send_data(senddata) {
    var m_sendmsg;
    var m_totlen;
    var m_bodylen;

    m_bodylen = senddata.NCbyteLength();
    m_totlen = 12 + m_bodylen;

    return NCpad(m_totlen,4) + "VCAT    " + NCpad(m_bodylen,4) + senddata;

  }

  String.prototype.NCbyteLength = function(){
    var l=0;

    for(var idx = 0; idx < this.length; idx++){
      var c = escape(this.charAt(idx));

      if(c.length == 1) l++;
      else if(c.indexOf("%u") != -1) l += 3;
      else if(c.indexOf("%") != -1) l += c.length/3; //JDK20210427 : UTF-8기준. EUC-KR은 /2로 수정 필요.
    }

    return l;
  };


  function NCpad(n,width)
  {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
  }
