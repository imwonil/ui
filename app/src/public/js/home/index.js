
const SNLength =document.getElementsByClassName("seats-number").length
const goods = document.querySelectorAll(".goods")
const apply = document.getElementById("apply")
const FeeSet =document.getElementsByClassName("sc-seats-number").length


let isDropdownOpen = true;
let idx = 0;

//좌석 종류 선택, 상품, 시간 같이 옵션의 대가리 부분
const dropdownButtons = document.querySelectorAll('.dropdown-button');
//일일권, 기간제, 고정석 등 요소들의 컨테이너
const dropdownMenus = document.querySelectorAll('.dropdown-menu');
//일일권, 기간제, 고정석 등 각 요소
const dropdownContent = document.querySelectorAll('.dropdown-content')
const dropdownButton = [...dropdownButtons]
const dropdownMenu = [...dropdownMenus]

//기간제, 고정석 id 생성 
for(var i=0; SNLength>i; i++) {

   const seetNumger = document.getElementsByClassName("seats-number")[i].outerText 
   
    document.getElementsByClassName("seats-number")[i].id = seetNumger
   
       const text=  document.getElementById(seetNumger).innerText
   

  
   
      const indexID =  document.getElementById(seetNumger).id =seetNumger;
    document.getElementById(seetNumger).onclick = () => {indexFunction(text )};
}

// 자유석 id 생성
for(var i=0; FeeSet>i; i++) {
      
    const feeSeetNumger = document.getElementsByClassName("sc-seats-number")[i].outerText 
    
     document.getElementsByClassName("sc-seats-number")[i].id = feeSeetNumger
    
        const text=  document.getElementById(feeSeetNumger).innerText
    
       const indexID =  document.getElementById(feeSeetNumger).id =feeSeetNumger;
     document.getElementById(feeSeetNumger).onclick = () => {indexFunction(text)};
 }



fetch('/setKind')
.then(res => res.json())
.then(data => { 
for(var i=0; data.wonset.length>i; i++) {


    const regex = /[^0-9]/g;
    const result = data.wonset[i].replace(regex, "");
    const number = parseInt(result);
   
   if(data.kindSet[i]=== "고정석") {
   const setColor=  document.getElementById(number).style ="background-color: #761ced;"
    document.getElementById(number).setAttribute("setName",data.kindSet[i] )
    document.getElementById(number).setAttribute("genderNmae",data.gender[i] )
}
   else if(data.kindSet[i] === "기간제")  {
    const setColor=  document.getElementById(number).style="background-color: #4cc4d4;"  
    document.getElementById(number).setAttribute("setName",data.kindSet[i] )
    document.getElementById(number).setAttribute("genderNmae",data.gender[i] )
  }
    
   else if(data.kindSet[i] === "자유석") {
       
      const setColor=  document.getElementById(number).style ="background-color: #4cc4d4;" 
      document.getElementById(number).setAttribute("setName",data.kindSet[i] )
      document.getElementById(number).setAttribute("genderNmae",data.gender[i] )
    }

   
}

  })
function indexFunction(number) {
 const goodsName = document.getElementById(number).getAttribute("setName")

const wonset   =  document.getElementById(number).outerText
const  gender = document.getElementById(number).getAttribute("genderNmae")
 const indexOf = sessionStorage.getItem("indexOf")
const req = {
  wonset,
  goodsName,
  gender,
  indexOf 
}
 if(wonset === null || goodsName === null || goodsName === null) {return alert("좌석타입이 설정되여 있지는 유형 입니다 유영자에게 문의 하세요")}
console.log(req)
 fetch("/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(req),

})
  .then((res) => res.json()) 
  .then((res) => { 
    if(res.success === false){ alert(res.msg)}
    console.log(res)
    alert(`${res[0].name}님 열공하세요`)
    // sessionStorage.removeItem("cdId")
    sessionStorage.removeItem("indexof")
     location.href = "/newLogin";

   })

}