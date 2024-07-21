
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
.then(data => { console.log(data.wonset)
for(var i=0; data.wonset.length>i; i++) {


console.log([i])
 const regex = /[^0-9]/g;
        const result = data.wonset[i].replace(regex, "");
        const number = parseInt(result);

   
    const setColor=  document.getElementById(number).style ="background-color: #4cc4d4;"
   
}

  })
function indexFunction(a) {

     console.log(a)
}