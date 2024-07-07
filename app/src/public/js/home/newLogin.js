"use strict"

const findAnchor = document.querySelector(".find-anchor")
// const regiModal = document.querySelector(".regi-modal")
const findModal = document.querySelector(".find-modal")

const feather = document.querySelector(".feather")
const exit = document.querySelector(".exit")

/**아이디/비번 찾기랑 회원가입 모달 각각 끄는 방법 */



/**X 눌렀을 때 아이디/비밀번호 찾기 및 퇴실 창 제거 */
exit.addEventListener("click", ()=>{
  console.log("dqd")
   findModal.classList.toggle("hidden")
})


findAnchor.addEventListener("click", ()=>{
  findModal.classList.toggle("hidden")
})



// const modalContent = document.querySelector(".modal-content")


// const findInfo = document.querySelectorAll(".find")
// const regiInfo = document.querySelectorAll(".register")

const id = document.querySelectorAll(".id")
const psword = document.querySelectorAll(".password")

const tab = document.querySelectorAll(".tab")

// const check = document.querySelector(".check")
// const checkout = document.querySelector(".checkout-modal")


/**가상 키보드 부분 */
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

  fetch("login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),

  }).then((res) => res.json())
    .then((res) => {


    if(res.success === true) {
      alert(`${req.id} 방갑습니다 :)`)
     
      setTimeout(() => {
        location.href = "/userInfor"
      }, 1000);
     
    }
    else if (res.success === false) {
        alert(res.msg)
      } 

    })

}
/**아이디/비밀번호/번호 끝 네자리/비밀번호 앞 두자리/아이디/비밀번호 => 0, 1, 2, 3, 4, 5 
이렇게 새롭게 idx를 매기겠음. info로부터 인덱스를 추출하겠음.*/
const info = document.querySelectorAll(".info")

// const idArr = [...id]
// const psArr = [...psword]
// const tabArr = [...tab]
// const infos = [...info]

let tabIdx = 0;
let idx = 0;

 let chars = []
 let arr = []

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

 buttons.forEach((btn)=>{
   btn.addEventListener("click",()=>{
      console.log(idx, "왜지")
     arr.push(btn.textContent)
     textarea.textContent = Hangul.assemble(arr)
     info[idx].value =  Hangul.assemble(arr)
     console.log(arr)
     })}) 



 delete_btn.addEventListener("click", ()=>{
    arr.pop();

   info[idx].value =  Hangul.assemble(arr)
 })


 space_btn.addEventListener("click", ()=>{
   arr.push(" ")
   info[idx].value = Hangul.assemble(arr)
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