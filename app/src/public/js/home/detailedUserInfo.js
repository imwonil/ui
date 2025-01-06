"use strict"


const setup = () => {
  return {
    loading: true,
    isSidebarOpen: false,
    toggleSidbarMenu() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    isSettingsPanelOpen: false,
    isSearchBoxOpen: false,
  }
}

const timeChangeBtn = document.querySelectorAll(".time-change-btn")
const timeChangeModal = document.querySelector(".time-change-modal")
const timeModalCancel = document.querySelector(".time-modal-cancel")

const detailName = document.querySelector("#user-name")
const detailPhone = document.querySelector("#user-phoneNumber")
const addDayName = document.querySelector("#add-day-name")

const daySubtraction = document.querySelector("#day-subtraction")
const dayAdd = document.querySelector("#day-add")
const inputDays = document.querySelector("#input-days")
const inputTime = document.querySelector("#input-time")
const inputMinute = document.querySelector("#input-minute")
const inputExpirData = document.querySelector("#expirData-days")


const expirDataAdd = document.querySelector("#expirData-add")
const expirDataSubtraction = document.querySelector("#expirDataChange-subtraction")

const expirUserName = document.querySelector("#expir-change-user-name")
const timeUserName = document.querySelector("#time-change-user-name")
timeChangeBtn.forEach((ele)=>{
 
  ele.addEventListener("click", ()=>{
    timeChangeModal.classList.toggle("hidden")
  })
})


timeModalCancel.addEventListener("click", ()=>{ //닫기
  
  timeChangeModal.classList.toggle("hidden")
})



const valChangeBtn = document.querySelectorAll(".val-change-btn")
const valChangeModal = document.querySelector(".val-change-modal")
const valModalCancel = document.querySelector(".val-modal-cancel")



valChangeBtn.forEach((ele)=>{
  
  ele.addEventListener("click", ()=>{
    valChangeModal.classList.toggle("hidden")
  })
})

valModalCancel.addEventListener("click", ()=>{

  valChangeModal.classList.toggle("hidden")
})

fetch('/adminNext')
.then(res => res.json())
.then(data => { 
 
  detailPhone.innerText =data[0].phon
 console.log(detailName)
  detailName.innerText = data[0].name
  
  console.log(data[0].UseTime.length)
  for(var i=0; data[0].UseTime.length>i; i++) {

    const TopDiv =  document.createElement('div'),
    div1 =  document.createElement('div'), div2 =  document.createElement('div'),
    div3 =  document.createElement('div'), div4 =  document.createElement('div'),
    div5 =  document.createElement('div'), div6 =  document.createElement('div')
    const p5 =  document.createElement('p')
    const p6 =  document.createElement('p')
    
    const div1_1= document.createElement('div'),  div1_2= document.createElement('div')
    const div2_1= document.createElement('div'),  div2_2= document.createElement('div')
    const div3_1= document.createElement('div'),  div3_2= document.createElement('div')
    const div4_1= document.createElement('div'),  div4_2= document.createElement('div')
    const div5_1= document.createElement('div'),  div5_2= document.createElement('div'), div5_3= document.createElement('div'),  div5_4= document.createElement('div')
    const div6_1= document.createElement('div'),  div6_2= document.createElement('div'), div6_3= document.createElement('div'),  div6_4= document.createElement('div')

    const SPAN1_1 =  document.createElement('span'), SPAN1_2 =  document.createElement('span')
    const SPAN2_1 =  document.createElement('span'), SPAN2_2 =  document.createElement('span')
    const SPAN3_1 =  document.createElement('span'), SPAN3_2 =  document.createElement('span')
    const SPAN4_1 =  document.createElement('span'), SPAN4_2 =  document.createElement('span')
    const SPAN5_1 =  document.createElement('span'), SPAN5_2 =  document.createElement('span')
    const SPAN6_1 =  document.createElement('span')  
    const possessGoods = document.querySelector('#possess-goods')

    possessGoods.appendChild(TopDiv)
    TopDiv.appendChild(div1)

    TopDiv.appendChild(div2)
    TopDiv.appendChild(div3)
    TopDiv.appendChild(div4)
    TopDiv.appendChild(div5)
    TopDiv.appendChild(div6)
    TopDiv.className ="flex flex-col md:flex-row md:h-[110px] justify-center items-center mb-4"
    div1.className="flex-1 w-full md:w-auto border text-center h-full"
    div2.className="flex-1 w-full md:w-auto border text-center h-full"
    div3.className="flex-1 w-full md:w-auto border text-center h-full"
    div4.className="flex-1 w-full md:w-auto border text-center h-full"
    div5.className="flex-1 w-full md:w-auto border text-center h-full"
    div6.className="flex-1 w-full md:w-auto border text-center h-full"
    
/////////////  구매 일자 //////////////////////////
    div1.appendChild(div1_1)
    div1_1.appendChild(div1_2)
    div1_1.className="styled-container h-full"
    div1_2.className="styled-content"
   
    div1_2.appendChild(SPAN1_1)
    div1_2.appendChild(SPAN1_2)
    SPAN1_1.className="styled-designation"
    SPAN1_2.className="styled-value"
    SPAN1_1.innerText ="구매일자"
    SPAN1_2.innerText ="1"

///////////// 이용권 유형 //////////////////////////
    div2.appendChild(div2_1)
    div2_1.appendChild(div2_2)
    div2_1.className="styled-container h-full"
    div2_2.className="styled-content"
   
    div2_2.appendChild(SPAN2_1)
    div2_2.appendChild(SPAN2_2)
    SPAN2_1.className="styled-designation"
    SPAN2_2.className="styled-value"
    SPAN2_1.innerText ="이용권 유형"
    SPAN2_2.innerText =data[0].goodsName[i]

///////////////// 잔연 시간  //////////////////////
div3.appendChild(div3_1)
div3_1.appendChild(div3_2)
div3_1.className="styled-container h-full"
div3_2.className="styled-content"

div3_2.appendChild(SPAN3_1)
div3_2.appendChild(SPAN3_2)
SPAN3_1.className="styled-designation"
SPAN3_2.className="styled-value"
SPAN3_1.innerText ="남은 사용 시간"
SPAN3_2.innerText =data[0].UseTime[i]


////////////// 유효 기간/////////////////////////
div4.appendChild(div4_1)
div4_1.appendChild(div4_2)
div4_1.className="styled-container h-full flex-1"
div4_2.className="styled-content"

div4_2.appendChild(SPAN4_1)
div4_2.appendChild(SPAN4_2)
SPAN4_1.className="styled-designation"
SPAN4_2.className="styled-value"
SPAN4_1.innerText ="유효 기간"
SPAN4_2.innerText = data[0].expiryName[i]


////////////// 잔여 시간 변경 /////////////////////////
div5.appendChild(div5_1)
div5_1.appendChild(div5_2)
div5_2.appendChild(div5_3)
div5_3.appendChild(div5_4)

div5_1.className="flex-1 h-full text-center"
div5_2.className="h-full border-collapse w-full rounded-md h-full"
div5_3.className="styled-container h-full flex-1"
div5_4.className="styled-content"

div5_4.appendChild(SPAN5_1)

div5_4.appendChild(p5)

SPAN5_1.className="styled-designation"

SPAN5_1.innerText ="잔여시간변경"
p5.className="time-change-btn float-right correction-btn middle none center rounded-lg border-2 border-gray-400 py-3 px-2 font-sans text-xs font-bold text-black transition-all hover:opacity-75 focus:ring active:opacity-[0.85] disabled:pointer-events-none bg-white disabled:opacity-50 disabled:shadow-none  mx-1"
p5.innerText="잔여시간 변경"
p5.id=`indexdays${i}`
////////////// 유효기간 시간 변경 /////////////////////////
div6.appendChild(div6_1)
div6_1.appendChild(div6_2)
div6_2.appendChild(div6_3)
div6_3.appendChild(div6_4)

div6_1.className="flex-1 h-full text-center"
div6_2.className="h-full border-collapse w-full rounded-md h-full"
div6_3.className="styled-container h-full flex-1"
div6_4.className="styled-content"

div6_4.appendChild(SPAN6_1)

div6_4.appendChild(p6)

SPAN6_1.className="styled-designation"

SPAN6_1.innerText ="유효기간 변경"
p6.className="time-change-btn float-right correction-btn middle none center rounded-lg border-2 border-gray-400 py-3 px-2 font-sans text-xs font-bold text-black transition-all hover:opacity-75 focus:ring active:opacity-[0.85] disabled:pointer-events-none bg-white disabled:opacity-50 disabled:shadow-none  mx-1"
p6.innerText="유효기간 변경"

p6.id=`indexExpiryData${i}`

// const IDExpiry = getElementById(`indexExpiryData${i}`).id
// const IDDays = getElementById(`indexdays${i}`).id
document.getElementById(`indexdays${i}`).onclick = () => {Change("dyasChange",p5.id, data[0].name,data[0].phon )}
document.getElementById(`indexExpiryData${i}`).onclick = () => {Change("expirDataChange",p6.id, data[0].name,data[0].phon) }
    
  } 

  // dayAdd.addEventListener("click", ADD)


  // function ADD () {
  //   if(inputDays.value === "" &&  inputTime.value === "" && inputMinute.value ==="") {
  //     return  alert("3개의 작성란에 1 이상이 여야합니다")
  //   }
  // //   const req = {
     
  // //     resaveTime: inputTime.value,
  // //    phon: data[0].phon,
     
  // //     add : "add",
  // //     index : listInfo
  // //  }
   
  // //    fetch("/adminControl", {
  // //      method: "POST",
  // //      headers: {
  // //        "Content-Type" : "application/json",
  // //      } ,
  // //      body: JSON.stringify(req),
         
  // //      }).then((res => res.json()))
  // //        .then((res) => {  
           
  // //          })



  // }

}




)
function Change(changeClick,indexOf,name, phon) {
  // daySubtraction.addEventListener("click", SUBT) 
  dayAdd.addEventListener("click", ADD)
  daySubtraction.addEventListener("click", SUBT) 
  console.log(name)
  expirUserName.innerText =  `이름 : ${name}`
  timeUserName.innerText =  `이름 : ${name}`
  const regex1 = /[^0-9]/g;
  const result1= indexOf.replace(regex1, "");
  const indexOfNumber = parseInt(result1);

  if(changeClick ==="dyasChange") {timeChangeModal.classList.toggle("hidden")}
  if(changeClick ==="expirDataChange") { valChangeModal.classList.toggle("hidden")}

  
  function ADD () {
    if(inputDays.value === "" &&  inputTime.value === "" && inputMinute.value ==="") {
      return  alert("3개의 작성란에 1 이상이 여야합니다")
    }
    console.log(inputDays.value, inputTime.value, inputMinute.value)
    const req = {
     
      resaveTime: inputTime.value,
      resaveDay:inputDays.value,
      resavMinute:inputMinute.value,
      add : "add",
      index :indexOfNumber,
      phon :phon
   }

   
     fetch("/allUserInfo", {
       method: "POST",
       headers: {
         "Content-Type" : "application/json",
       } ,
       body: JSON.stringify(req),
         
       }).then((res => res.json()))
         .then((res) => {  
          console.log(res)
          if(res.success === true) { alert("변경되였습니다.")
        
           location.href = "/detailedUserinfo"
        }
           })



  

  }
  function SUBT () {
    if(inputDays.value === "" && inputTime.value === "" && inputMinute.value ==="") {
      return  alert("3개의 작성란에 1 이상이 여야합니다")
    }
   
  
      const req = {
       
        resaveTime: inputTime.value,
        resaveDay:inputDays.value,
        resavMinute:inputMinute.value,
        add : "sub",
        index :indexOfNumber,
        phon :phon
     }
  
     console.log(req)
     
       fetch("/allUserInfo", {
         method: "POST",
         headers: {
           "Content-Type" : "application/json",
         } ,
         body: JSON.stringify(req),
           
         }).then((res => res.json()))
           .then((res) => {  
            if(res.success === true) { alert("변경되였습니다.")}
            location.href = "/detailedUserinfo"
             })
  
  
  
    
  
    

  }


expirDataAdd.addEventListener("click" , ExpirDataAdd ) 
expirDataSubtraction.addEventListener("click", ExpirDataSubtratction)

 function  ExpirDataAdd() {
  if(inputExpirData.value ==="") {
    return  alert("공란이 존재합니다")
  }
  const req = {
       
    expirDataresave:inputExpirData.value,
    add : "expirDataAdd",
    index :indexOfNumber,
    phon :phon
 }


 
   fetch("/allUserInfo", {
     method: "POST",
     headers: {
       "Content-Type" : "application/json",
     } ,
     body: JSON.stringify(req),
       
     }).then((res => res.json()))
       .then((res) => {  
        if(res.success === true) { alert("변경되였습니다.")
        location.href = "/detailedUserinfo"}
         })
 }
 function  ExpirDataSubtratction() {

  if(inputExpirData.value ==="") {
    return  alert("공란이 존재합니다")
  }

  const req = {
       
    expirDataresave:inputExpirData.value,
    add : "expirDataSub",
    index :indexOfNumber,
    phon :phon
 }

 console.log(req)
 
   fetch("/allUserInfo", {
     method: "POST",
     headers: {
       "Content-Type" : "application/json",
     } ,
     body: JSON.stringify(req),
       
     }).then((res => res.json()))
       .then((res) => {  
        
         if(res.success === true) { alert("변경되였습니다.")
         location.href = "/detailedUserinfo"}
         })

 }

 

}