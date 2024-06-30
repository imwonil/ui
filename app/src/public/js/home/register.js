
    $(".tabs li").click(function(){
      $(this).addClass("actived")
      $(this).siblings().removeClass("actived")

      var tab = $(this).attr("data-alt")
      $(".wrapper div").removeClass("actived-form")
      $("#" + tab).addClass("actived-form")
    })

const SEND = document.querySelector("#sned") 
console.log(SEND) 
const LOGINVALUE = document.querySelector("#login"),
      PASSwORDVALUE = document.querySelector("#password")
      
    



SEND.addEventListener("click", numberSend)

function numberSend() {

    console.log(LOGINVALUE.value, PASSwORDVALUE.value)
}
