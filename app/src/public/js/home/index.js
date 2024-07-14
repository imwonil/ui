


const SNLength =document.getElementsByClassName("seats-number").length
for(var i=0; SNLength>i; i++) {

   const seetNumger = document.getElementsByClassName("seats-number")[i].outerText 
   
    document.getElementsByClassName("seats-number")[i].id = seetNumger
   
       const text=  document.getElementById(seetNumger).innerText
   

  
   
      const indexID =  document.getElementById(seetNumger).id =seetNumger;
    document.getElementById(seetNumger).onclick = () => {indexFunction(text )};
}


function indexFunction(a) {

    console.log(a)
}