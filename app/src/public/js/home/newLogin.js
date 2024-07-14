"use strict"

//240711 업데이트 입실 로직

//checkin이 로그인 버튼 눌렀을 때 나타나는 입실 관련 모달창
const checkin = document.querySelector(".checkin-modal")
const checkinExit = document.querySelector(".checkin-exit")
const keyboardContainer = document.querySelector(".keyboard-container")


//240711 업데이트 퇴실 로직

//checkout이 로그아웃 버튼 눌렀을 때 나타나는 퇴실 관련 모달창
const checkout = document.querySelector(".checkout-modal")
const checkoutExit = document.querySelector(".checkout-exit")




const loginSection = document.querySelector(".login-section")
const findAnchor = document.querySelector(".find-anchor")
// const regiModal = document.querySelector(".regi-modal")
const findModal = document.querySelector(".find-modal")

const feather = document.querySelector(".feather")
const findExit = document.querySelector(".find-exit")

/**아이디/비번 찾기랑 회원가입 모달 각각 끄는 방법 */



/**X 눌렀을 때 아이디/비밀번호 찾기 및 퇴실 창 제거 */
findExit.addEventListener("click", ()=>{
  console.log("dqd")
   findModal.classList.toggle("hidden")
  loginSection.classList.toggle("hidden")
  //findmodal이 서서히 나오도록 어떻게 바꿀까?? 
})


findAnchor.addEventListener("click", ()=>{
  findModal.classList.toggle("hidden")
  loginSection.classList.toggle("hidden")
})



// const modalContent = document.querySelector(".modal-content")


// const findInfo = document.querySelectorAll(".find")
// const regiInfo = document.querySelectorAll(".register")

const id = document.querySelectorAll(".id")
const psword = document.querySelectorAll(".password")

const tab = document.querySelectorAll(".tab")

// const check = document.querySelector(".check")
// const checkout = document.querySelector(".checkout-modal")


/**가상 키보드 부분, js81번쨰 줄에서 에러가 발생했기 때문에 가상 키보드가 인식되지 않는다.  */
const buttons = document.querySelectorAll(".btn");
  const fortis = document.querySelectorAll(".fortis")
 const textarea = document.querySelector("textarea")
 const delete_btn = document.querySelector(".delete")
 const ko_shift_btn = document.querySelector(".ko-shift")
 const en_shift_btn = document.querySelector(".en-shift")
 const space_btn = document.querySelector(".space")
 const translate = document.querySelector(".translate")
 const koKeyboard = document.querySelector(".ko-keyboard")
 const enKeyboard = document.querySelector(".en-keyboard")



 const PHONE = document.querySelector("#PHONE"),  // 로그인 value id 값 html. 123 line
       PSWORD = document.querySelector("#PSWORD"), // 로그인 value id 값 html 126 line 
       BUTTON = document.querySelector("#BUTTON")

const m = moment().format('yyyyMMDDhhmm')
const nowTime = moment().format('yyyyMMDDhhmm')

BUTTON.addEventListener("click", LOGINBUTTON) 





function LOGINBUTTON () {

  const a = document.querySelector("#PHONE").setAttribute("placeholder", `username${PHONE.value}`)
  const b = document.querySelector("#PHONE").getAttribute("placeholder")
  const req = {
    phone: PHONE.value,
    psword: PSWORD.value,
    loginStart: nowTime,
    noName: b
  };
console.log(req)
  fetch("newlogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),

  }).then((res) => res.json())
    .then((res) => {
      console.log(res.goodsName.length)
 
    if(res.id !== undefined) {
      alert(`${req.phone} 방갑습니다 :)`)

     
      /*입실(checkin-anchor)을 눌렀을 때 checkin 모달창 열림 */
      setTimeout(() => {
        checkin.classList.toggle("hidden");
        loginSection.classList.toggle("blur")
        keyboardContainer.classList.toggle("blur")
    
      }, 500);

      if(res.goodsName.length === 0 ) {
        console.log("po")
      }
    
    
     
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
         
                 }
         if (res.wonset[i] !== ''){
          span3.innerHTML='사용중'
          span4.innerHTML='자리이동'
          span4.id=`index${i}`
        }                // 현자 사용하고 있는 여부
    
         
               
   
        span5.innerHTML="ㄷㄷㄷ"
   
        
       //  td.innerText =`현재 사용중인 자리 : ${data[0].wonset[i]}  상품:${data[0].goodsName[i]} - ${data[0].benchName[i]} `
       const text=  document.getElementById(`index${i}`).innerText
       const indexID =  document.getElementById(`index${i}`).id
       document.getElementById(`index${i}`).onclick = () => {indexFunction(indexID,text )};

      }
      

      
    



    }
    else if (res.success === false) {
        alert(res.msg)
      } 

    })

    

}



function indexFunction(index, text) { //자리 선택 및 자리 이동
  console.log(index, text)


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

 buttons.forEach((btn)=>{
   btn.addEventListener("click",()=>{
      console.log(idx, "왜지")
     arr.push(btn.textContent)
     textarea.textContent = Hangul.assemble(arr)
     info[idx].value =  Hangul.assemble(arr)
     console.log(arr)
     })}) 


delete_btn.addEventListener("click", ()=>{
  chars.pop();

 info[idx].value =  Hangul.assemble(chars)
})


space_btn.addEventListener("click", ()=>{
 chars.push(" ")
 info[idx].value = Hangul.assemble(chars)
})


ko_shift_btn.addEventListener("click", ()=>{
 fortis.forEach(btn=>{
   btn.classList.toggle("hidden")
 })
})

en_shift_btn.addEventListener("click", ()=>{
 buttons.forEach(btn =>{
   btn.classList.toggle("upper")
 })

})

translate.addEventListener("click", ()=>{
 console.log(translate)
 enKeyboard.classList.toggle("hidden")
   koKeyboard.classList.toggle("hidden")
})

let tabIdx = 0;


 let chars = []

/**다른 tab을 눌렀을 때 arr의 초기화*/


/**아이디/비밀번호/번호 끝 네자리/비밀번호 앞 두자리/아이디/비밀번호 => 0, 1, 2, 3, 4, 5 
이렇게 새롭게 idx를 매기겠음 */

tab.forEach((tabs)=>{  //tap 클릭시 반응하는 함수




  tabs.addEventListener("click", ()=>{
   const TAB =  tabs.dataset
    arr.length = 0;
    id[tabIdx].value = ""
    psword[tabIdx].value = ""

  if(TAB.alt === "tab1") {TAB.alt = "login"}
    else if(TAB.alt ==="tab2"){TAB.alt = "next"}
     else if(TAB.alt === "tab3"){TAB.alt="logout"}

    if(TAB.alt === "login") {



    }

  })
})

/**아디/비번 칸 클릭했다가 다른 칸 클릭한 뒤 다시 이전 칸 눌렀을 때 기존에 타이핑된 값들이 유지되어야겠지? 
한글 단위로 정확하게 split가 안되는거 같은데 원인 분석 다시 할 것 .. */

/**모달창은 그냥 들어갔다 나오면 초기화 하는 방법으로 할게 
그냥 모달 구성하는 4개 칸을 새로운 클래스로 묶고 foreach 반복문 돌릴게 */
// info.forEach((ele)=>{
//   ele.addEventListener("click", ()=>{

//     idx = infos.indexOf(ele)

//     if(info[idx].value !== ""){
//       arr.length = 0;
//       arr = info[idx].value.split("")

//     }

//    if(info[idx].value == ""){
//      arr.length = 0;
//    }

//   })
// })






 