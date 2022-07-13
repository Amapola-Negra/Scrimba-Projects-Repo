const pass1= document.getElementById("pass-1")
const pass2= document.getElementById("pass-2")
const pass3= document.getElementById("pass-3")
const pass4= document.getElementById("pass-4")
const selectInfo= document.getElementById("select-info")
const selector= document.getElementById("selector")


const passArr=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "/", "(", ")", "=", "?", "¿", "¿", "¡", "^", "*", "+", "-", "[", "]", "{", "}", "ç", "ñ", ";", ":"]
selectInfo.innerHTML=`Select the length. It defaults to ${selector.value}`;

function changeValue(){
    selectInfo.innerHTML=selector.value;
}
   
function generatePass(){ // generate a random combination of characters for each password
    
    let rPass1="";
    let rPass2="";
    let rPass3="";
    let rPass4="";
    for(let i = 0; i < selector.value ; i++){
        
        rPass1+=passArr[Math.floor(Math.random()*passArr.length)];
        rPass2+=passArr[Math.floor(Math.random()*passArr.length)];
        rPass3+=passArr[Math.floor(Math.random()*passArr.length)];
        rPass4+=passArr[Math.floor(Math.random()*passArr.length)];
    }
//place the passwords into their right place
    pass1.value=rPass1;
    pass2.value=rPass2;
    pass3.value=rPass3;
    pass4.value=rPass4;
    selectInfo.innerHTML="Click to copy your password."
}
function copyToClipBoard1() {
    if (pass1.value !== "password"){
         pass1.select();
        document.execCommand('copy');
        selectInfo.innerHTML="Copied!";
    }
   
}
function copyToClipBoard2() {
    if (pass2.value !== "password"){
        pass2.select();
        document.execCommand('copy');
        selectInfo.innerHTML="Copied!";
    }
}
function copyToClipBoard3() {
    if (pass3.value !== "password"){
        pass3.select();
        document.execCommand('copy');
        selectInfo.innerHTML="Copied!";
    }
}
function copyToClipBoard4() {
    if (pass4.value !== "password"){
        pass4.select();
        document.execCommand('copy');
        selectInfo.innerHTML="Copied!";
    }
}