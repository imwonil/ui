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
 const kioceTotall = []
//드롭다운은 html 103: 참고
const timeID =  moment().format('1MMDDhhmmss') 
//좌석 종류 선택, 상품, 시간 같이 옵션의 대가리 부분
const dropdownButtons = document.querySelectorAll('.dropdown-button');
//일일권, 기간제, 고정석 등 요소들의 컨테이너
const dropdownMenus = document.querySelectorAll('.dropdown-menu');
//일일권, 기간제, 고정석 등 각 요소

const TEB = document.querySelectorAll('.teb');

const TYPE = document.getElementById("seetType")


TEB.forEach((tebKinde) => {

 tebKinde.onclick = () => {tebClick(tebKinde.innerText)};



})



function tebClick(tebKinde) {

    fetch('/adminGoodsKiosk')
.then(res => res.json())
.then((data => { 
    for(var i =0; i<data.length; i++ ) {
    const menz = data.filter(function (setAdd) { return setAdd.indexType === data[i].indexType });
    if(tebKinde === "고정석" && menz[0].indexType === "fixedType") {
        document.getElementsByTagName("tbody")[0].innerHTML=""
           for(var y = 0; y<menz[0].feeName.length; y++) {
          
            const tr =  document.createElement('tr')
            const tbody = document.querySelector('tbody')
            
            tbody.appendChild(tr)
                         
            const td0 = document.createElement('td')
            const td1 = document.createElement('td')
            const td2 = document.createElement('td')
            const td3 = document.createElement('td')
           
            

            
            td0.className = "styled-td"
            td1.className = "styled-td"
            td2.className = "styled-td"
            td3.className =  "styled-td"
           
         
            
          
           
            td0.innerText = "고정석"
            td1.innerText = menz[0].feeName[y] 
            td2.innerText = menz[0].fee[y]  
            td3.innerText =  menz[0].expiry[y]
          
            
           
            tr.appendChild(td0).id = "fixedType"
            tr.appendChild(td1).id = menz[0].feeName[y] 
            tr.appendChild(td2).id =  menz[0].fee[y]+"fixedType"  
            tr.appendChild(td3).id = menz[0].expiry[y]
           
            document.getElementById(menz[0].fee[y]+"fixedType" ).onclick = () => {payClick(td1.outerText,td3.outerText,td2.outerText,"fixedType")}
         
          }
        
  return;
    }
    if(tebKinde === "자유석" && menz[0].indexType === "feeType"){
        document.getElementsByTagName("tbody")[1].innerHTML=""
     
        for(var y = 0; y<menz[0].feeName.length; y++) {
          
            const tr =  document.createElement('tr')
            const tbody = document.querySelector('#feeType')
            
            tbody.appendChild(tr)
                         
            const td0 = document.createElement('td')
            const td1 = document.createElement('td')
            const td2 = document.createElement('td')
            const td3 = document.createElement('td')
            const td4 = document.createElement('td')
            
          
            
            td0.className = "styled-td"
            td1.className = "styled-td"
            td2.className = "styled-td"
            td3.className =  "styled-td"
           
         
            
          
           
            td0.innerText = "자유석"
            td1.innerText = menz[0].feeName[y] 
            td2.innerText = menz[0].fee[y]  
            td3.innerText =  menz[0].expiry[y]
          
            
           
            tr.appendChild(td0).id = "자유석"
            tr.appendChild(td1).id = menz[0].feeName[y] 
            tr.appendChild(td2).id =  menz[0].fee[y]+"자유석"
            tr.appendChild(td3).id =  menz[0].fee[y]+"자유석"
              
            document.getElementById(menz[0].fee[y]+"자유석").onclick = () => {payClick()}
         
          }  
         
        }
         if(tebKinde === "기간제" && menz[0].indexType === "daysType"){
            document.getElementsByTagName("tbody")[2].innerHTML=""
           
        for(var y = 0; y<menz[0].feeName.length; y++) {
          
            const tr =  document.createElement('tr')
            const tbody = document.querySelector('#daysType')
            
            tbody.appendChild(tr)
                         
            const td0 = document.createElement('td')
            const td1 = document.createElement('td')
            const td2 = document.createElement('td')
            const td3 = document.createElement('td')
           
       
            
            td0.className = "styled-td"
            td1.className = "styled-td"
            td2.className = "styled-td"
            td3.className =  "styled-td"
            
         
            
          
           
            td0.innerText = "기간제"
            td1.innerText = menz[0].feeName[y] 
            td2.innerText = menz[0].fee[y]  
            td3.innerText =  menz[0].expiry[y]
          
            
           
            tr.appendChild(td0).id = "daysType"
            tr.appendChild(td1).id = menz[0].feeName[y] 
            tr.appendChild(td2).id = menz[0].fee[y]+"daysType"  
            tr.appendChild(td3).id = menz[0].expiry[y]
           
            
             
           
         
          
          
            document.getElementById(menz[0].fee[y]+"daysType").onclick = () => {payClick()}
           
           

           
            }  
        
        
        }
      
      
      
 
}
  
      }))  
    
     }



const dropdownContent = document.querySelectorAll('.dropdown-content')

let isDropdownOpen = true;
let idx = 0;


const dropdownButton = [...dropdownButtons]
const dropdownMenu = [...dropdownMenus]


//boolean 값을 toggle 해서 dropdownMenu의 open/close를 결정한다. 


function toggleDropdown() {
    
    isDropdownOpen = !isDropdownOpen;
    if (isDropdownOpen) {
        dropdownMenu[idx].classList.remove('hidden');
    } else {
        dropdownMenu[idx].classList.add('hidden');
    }
}

toggleDropdown();


// 추가시 상품 설정 
dropdownButton.forEach((btn)=>{
    
    btn.addEventListener("click", ()=>{
    
        idx = dropdownButton.indexOf(btn)
      
        toggleDropdown();
    }) 
})




//옵션의 각 요소를 선택하였을 때 옵션의 대가리를 내가 선택한 요소의 텍스트 콘텐츠로 결정한다.
// ex) 좌석 종류 선택 -> 좌석 선택시 옵션의 대가리 명을 좌석으로 한다. 
dropdownContent.forEach((ele)=>{
    ele.addEventListener("click", ()=>{
       
        dropdownMenu[idx].classList.add('hidden');
        isDropdownOpen = true;
        dropdownButton[idx].textContent = ele.textContent;
    })
})

//옵션 선택 중 외부를 클릭하였을 때 드롭다운이 꺼진다. 
window.addEventListener('click', (event) => {
    if (!dropdownButton[idx].contains(event.target)) {
        dropdownMenu[idx].classList.add('hidden');
        isDropdownOpen = false;
    }

});


//각 좌석, 모달, 모달의 취소버튼, 모달의 적용버튼
const correctionModal = document.querySelector(".correction-modal")
const additionModal = document.querySelector(".addition-modal")

//추가 버튼 (pc에서 보이는 거, 모바일 사이즈에서 보이는 것, 총 2개라 forEach 써야함)

const additionBtn = document.querySelectorAll(".addition-btn")

//수정 및 삭제 버튼은 테이블의 각 row별로 N개임
const correctionBtn = document.querySelectorAll(".correction-btn")
const deletionBtn = document.querySelectorAll(".deletion-btn")

const Type = document.getElementById("type")

const addCancelBtn = document.querySelector(".add-cancel-btn") 
const addAdditionBtn = document.querySelector(".add-Addition-btn") 
    
const cancelBtn = document.querySelector(".cancel-button")
const adjustBtn = document.querySelector(".adjust-button")


//수정 추가 모달창 생성
additionBtn.forEach((ele)=>{
    ele.addEventListener("click", ()=>{
        additionModal.classList.toggle("hidden")
    })
})


//취소 버튼 누르면 추가 모달 꺼짐
addCancelBtn.addEventListener("click", ()=>{
    additionModal.classList.toggle("hidden")
   location.href = location.href;
})




cancelBtn.addEventListener("click", ()=>{
    
    correctionModal.classList.toggle("hidden")
})


correctionBtn.forEach((ele)=>{
    ele.addEventListener("click", ()=>{
        console.log(els)
        correctionModal.classList.toggle("hidden")
    })
})


//추가 버튼을 눌러서 나타난 모달에서 추가 버튼을 누르면 새로 고침이 되어서 해당 목록이 테이블에 나타나게끔 js를 설계해야 한다. 

//수정 버튼을 눌러서 나타난 모달에서 수정 버튼을 누르면 새로 고침이 되어서 해당 목록이 테이블에 나타나게끔 js를 설계해야 한다.

function payClick(goodsName,expiry,fee,setGoods) {

console.log(goodsName,expiry,fee,setGoods)  
kioceTotall.push(goodsName, expiry, fee,setGoods )

document.querySelector(".modal").classList.remove("hidden"); //모달창 생성
var TYPE = "VCAT";
var TYPE2 = "NICEVCAT";
var FS = '\x1C';
var H7 = '\x07';
var sendbuf;
var iFlag = '0';
document.getElementById("feeName").innerText = `결제 금액 :  ${fee}`
const regex = /[^0-9]/g;
const result = goodsName.replace(regex, "");
const number = parseInt(result);

const nowTime = moment().format('yy-MM-DD hh:mm')

const seet = document.getElementById('seet');


  seet.addEventListener('change', function () { 
  const seetValue = seet.options[seet.selectedIndex].value;

   
const  Button = document.getElementById("cad").addEventListener("click", handleClick('credit'))


function handleClick(myRadio) //카드 결제 information 
{        
 console.log(myRadio)

 if(myRadio == 'credit') //신용승인
 {
   sendbuf = "NICEVCAT" + H7 + "0200" + FS + "10" + FS + "C" + FS + fee + FS + "0" + FS + "0" + FS + seetValue + FS + "" + FS + "" + FS + "" + FS + "" + FS + FS + FS + "" + FS + FS + FS + FS + ""+ FS + H7;						
 }
 // 		else if(myRadio.value == 'credit_cancel') //신용취소
 // {
 // 	sendbuf = "NICEVCAT" + H7 + "0420" + FS + "10" + FS + "C" + FS + form.money.value + FS + form.tax.value + FS + form.bongsa.value + FS + form.halbu.value + FS + form.agreenum.value + FS + form.agreedate.value + FS + form.catid.value + FS + FS + FS + FS + form.myunse.value + FS + FS + FS + FS + "" + FS + H7;
 // }



 form.SendData.value = sendbuf +"" + kioceTotall ;	 // 이정보를 가지고 post 
 console.log(form.SendData.value, "39")		
    
}	
 
    
      })
      console.log(kioceTotall,"227")
      return kioceTotall
    }


    var sendbuf;
	var iFlag = '0';
		function reqVCAT_HTTP(myRadio) //VCAT 클릭 이벤트 함수  함수 
		{ 	
			var sendMsg;	
			var RecvData;
			
			form.RecvData.value = "";
			sendMsg = form.SendData.value;	
		    
				
			if(sendMsg.length == 0)
				alert("할부 개월수 및 금액을 확인 해주세요");
			else{				
				if(sendMsg == "REQ_STOP")
				{	

					sendbuf = make_send_data(sendMsg);	
							
					
					$.ajax
						({ url         : "http://127.0.0.1:9189"    
						 , type        : "POST"
						 , dataType    : "text"
						 //, timeout     : $("#vanpReqTimeOut").val()
						 , data        : encodeURI(sendbuf)
						 , success     : function(data) {							
							   form.RecvData.value = data;	
							console.log("dkfkdkf")
						 
						 }
					});			 
					  
				}
				else 
				{		
					//요청 시 중복방지로직을 필수로 처리해주세요. 
					if(iFlag == '0')
					{
  
						
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
                
              if(data.length <= 506) { return alert("결제가 정상적으로 이루워지 않았습니다.")}
               
                
                const arr1 = sendbuf.split("",40);
               
                const str = `${form.RecvData.value}`
               
                const arr = str.split("",20);
                console.log(arr,"303")
                const number1= arr1[19].split(",", 4)
             
                const regex = /[^0-9]/g;
                const result = arr[16].replace(regex, "");
                const number = parseInt(result);

                const regex1 = /[^0-9]/g;
                const result1= number1[0].replace(regex1, "");
                const number2 = parseInt(result1);
               console.log(number2 , "319")
               console.log(arr1 , "320")
               
           const req = {
            approvalDay: arr[8],   //승인 날짜 표기
            approvalNumber : number, //승인 번호
            day:number2,            
            setGoods:number1[3],
            fee:number1[2],
            expiry:number1[1],
            hangle:arr[6],
            approvalDay :arr[8]

           }
           console.log(req, "332")
          
             fetch("/productlist", {
              method: "POST",
              headers : {
                "Content-Type" :"application/json"
              },
              
               body: JSON.stringify(req),
              })
              .then((res => res.json()))
              .then(( res) => {
              alert("결제 되였습니다. ")
                setTimeout(() => {

                  location.href = "/newLogin"
                }, 1500);
            
              
              })
                
							 }
							 , error       : function(request, status, error) {
                console.log("340")
								if(sendMsg == "RESTART" || sendMsg == "NVCATSHUTDOWN")

								{
                  
									//응답 받지 않아서 예외 처리
								}
								else
									alert('AJAX 통신 실패! NVCAT 실행 여부 확인!');
                 
								iFlag = '0';
							 }
						});		
					}
					else	
						alert('버튼 중복 클릭');				
				}
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





