const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

//add event
 form.addEventListener('submit',(event) =>{
     event.preventDefault();
     validate();
 })

 const sendData = (sRate,count) => {
     if(sRate === count){
         alert("Registration Successfull!!")
     }
 }

 const SuccessMsg = () => {
     let formCon = document.getElementsByClassName('form-control');
     var count = formCon.length - 1;
     for(var i= 0 ; i< formCon.length;i++){
         if (formCon[i].className === "form-control success"){
             var sRate = i;
             sendData(sRate,count);
         }
         else{
             return false;
         }
     }
 }

 const validate = () => {   
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //validate username
    if(usernameVal === ""){
        setErrorMsg(username,"username field cannot be empty");
    }
    else if (username.length <= 2){
        setErrorMsg(username,"username has minimum 3 char")
    }
    else{
        setSuccessMsg(username);
    }

    //validate email
    if(emailVal === ""){
        setErrorMsg(email,"email field cannot be empty");
    }
    else if (!isEmail(emailVal)){
        setErrorMsg(email,"Email is not valid")
    }
    else{
        setSuccessMsg(email);
    }

    //validate phone no.
    if(phoneVal === ""){
        setErrorMsg(phone,"Phone number cannot be empty");
    }
    else if (phoneVal.length != 10){
        setErrorMsg(phone,"Phone number must have 10 digit")
    }
    else{
        setSuccessMsg(phone);
    }
    //validate password
    if(passwordVal === ""){
        setErrorMsg(password,"password cannot be empty");
    }
    else if (passwordVal.length <= 5){
        setErrorMsg(password,"password has minimum 5 char")
    }
    else{
        setSuccessMsg(password);
    }

    //validate cpassword
    if(cpasswordVal === ""){
        setErrorMsg(cpassword,"Cannot be empty");
    }
    else if (passwordVal!=cpasswordVal){
        setErrorMsg(cpassword,"Password doesn't match!!")
    }
    else{
        setSuccessMsg(cpassword);
    }

    SuccessMsg();
 }

 const isEmail = (emailVal) => {
     var atSymbol =emailVal.indexOf("@");
     if(atSymbol < 1) return false;
    var dot =emailVal.lastIndexOf (".")
    if(dot <= atSymbol +3) return false;
    if(dot===emailVal.length -1) return false;
    return true;
 }

 function setErrorMsg(input,errormsgs) {
    const formControl =input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = errormsgs;    
 }

 function setSuccessMsg(input,errormsgs) {
    const formControl =input.parentElement;
    formControl.className = "form-control success"      
 }