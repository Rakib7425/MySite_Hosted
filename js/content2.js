/*
function whatsApp(){

let preLink= "https://api.whatsapp.com/send?phone="
let midLink="&text="
let code = document.getElementById("countryCode").value;
let number = document.getElementById("phoneNumber").value;
let message= document.getElementById("message").value;
let final=(preLink + code + number + midLink + message);
window.open(document.getElementById("sendButton").insertAdjacentText = final) ;
// alert(preLink + code + number + midLink + message); 
// console.log(final); 

}

*/

function whatsApp(){let e="https://web.whatsapp.com/send?phone="+document.getElementById("countryCode").value+document.getElementById("phoneNumber").value+"&text="+document.getElementById("message").value;window.open(document.getElementById("sendButton").insertAdjacentText=e)}