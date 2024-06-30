"use strict"
// window.Hangul = require('hangul-js'); 
const findModal = document.querySelector(".find-modal")
const regiModal = document.querySelector(".regi-modal")


const modalContent = document.querySelector(".modal-content")


const findInfo = document.querySelectorAll(".find")
const regiInfo = document.querySelectorAll(".register")
          
const id = document.querySelectorAll(".id")
const psword = document.querySelectorAll(".password")

const tab = document.querySelectorAll(".tab")

// -----registration----------- // 회원등혹 필요한 value들 
const REGNAME =  document.querySelector("#regName")
,REGPHONE =  document.querySelector("#regPhone")
,REGID = document.querySelector("#regId")
,REGPASSWORD = document.querySelector("#regpassword")
,REGPASSWORDSURE = document.querySelector("#regpasswordSure")

/**아이디/비번 찾기랑 회원가입 모달 각각 끄는 방법 */

addEventListener("click", function(e){
  /**모달창 바깥 영역 클릭시 창 제거 */
  if(findModal.style.display == "block" && e.target.className == "find-modal"){
    findModal.style.display = "none";
  }

  /**X 눌렀을 때 창 제거 */
  if(findModal.style.display == "block" && e.target.className.includes("fa-solid")){
    findModal.style.display = "none";
  }

})

addEventListener("click", function(e){
  /**모달창 바깥 영역 클릭시 창 제거 */
  // if(regiModal.style.display == "block" && e.target.className == "regi-modal"){
  //   regiModal.style.display = "none";
  // }

  /**X 눌렀을 때 창 제거 */
  if(regiModal.style.display == "block" && e.target.className.includes("fa-solid")){
    regiModal.style.display = "none";
  }

})


 /**아이디/비밀번호 찾기 눌렀을 때 모달창 열림 */
findInfo.forEach((info)=>{
  info.addEventListener("click", function(){
  findModal.style.display = "block";
})})


 /**회원가입 눌렀을 때 모달창 열림 */
regiInfo.forEach((regi)=>{
  regi.addEventListener("click", function(){

  regiModal.style.display = "block";
})})

regiModal.style.display
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

/**아이디/비밀번호/번호 끝 네자리/비밀번호 앞 두자리/아이디/비밀번호 => 0, 1, 2, 3, 4, 5 
이렇게 새롭게 idx를 매기겠음. fadeIn으로부터 인덱스를 추출하겠음.*/
const fadeIn = document.querySelectorAll(".fadeIn")

const idArr = [...id]
const psArr = [...psword]
const tabArr = [...tab]
const fadeIns = [...fadeIn]

let tabIdx = 0;
let idx = 0;

 let chars = []
 let arr = []

/**다른 tab을 눌렀을 때 arr의 초기화*/


/**터치이벤트를 검증할 수 있는 방법을 잘 모르겠어서 mouse로 대체하겠음 */
/**아이디/비밀번호/번호 끝 네자리/비밀번호 앞 두자리/아이디/비밀번호 => 0, 1, 2, 3, 4, 5 
이렇게 새롭게 idx를 매기겠음 */

tab.forEach((tabs)=>{
  tabs.addEventListener("click", ()=>{
    tabIdx = tabArr.indexOf(tabs)
    arr.length = 0;
    id[tabIdx].value = ""
    psword[tabIdx].value = ""

  })
})

/**아디/비번 칸 클릭했다가 다른 칸 클릭한 뒤 다시 이전 칸 눌렀을 때 기존에 타이핑된 값들이 유지되어야겠지? 
한글 단위로 정확하게 split가 안되는거 같은데 원인 분석 다시 할 것 .. */
fadeIn.forEach((ele)=>{ //회원버튼 클릭시 작동
  ele.addEventListener("click", ()=>{
    idx = fadeIns.indexOf(ele)
    if(fadeIn[idx].value !== ""){
      arr.length = 0;
      arr = fadeIn[idx].value.split("")
    console.log(REGNAME.value,)
    }

   if(fadeIn[idx].value == ""){
     arr.length = 0;
   }
  })
})

 buttons.forEach((btn)=>{
   btn.addEventListener("click",()=>{
     arr.push(btn.textContent)
     textarea.textContent = Hangul.assemble(arr)
     fadeIn[idx].value =  Hangul.assemble(arr)
     console.log(arr)
     })}) 



 delete_btn.addEventListener("click", ()=>{
    arr.pop();

   fadeIn[idx].value =  Hangul.assemble(arr)
 })


 space_btn.addEventListener("click", ()=>{
   arr.push(" ")
    textarea.value = Hangul.assemble(arr)
 })


 ko_shift_btn.addEventListener("click", ()=>{
   fortis.forEach(btn=>{
     btn.classList.toggle("trans")
   })
 })

 en_shift_btn.addEventListener("click", ()=>{
   buttons.forEach(btn =>{
     btn.classList.toggle("upper")
   })

  })

 translate.addEventListener("click", ()=>{
   enKeyboard.classList.toggle("trans")
     koKeyboard.classList.toggle("trans")
 })
 
 