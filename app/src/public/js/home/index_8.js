


const SNLength =document.getElementsByClassName("seats-number").length
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
for(var i=0; SNLength>i; i++) {

   const seetNumger = document.getElementsByClassName("seats-number")[i].outerText 
   
    document.getElementsByClassName("seats-number")[i].id = seetNumger
   
       const text=  document.getElementById(seetNumger).innerText
   

  
   
      const indexID =  document.getElementById(seetNumger).id =seetNumger;
    document.getElementById(seetNumger).onclick = () => {indexFunction(text )};
}


function indexFunction(a) {
    dropdownMenu[idx].classList.remove('hidden');
    
}