const emailInput  = document.querySelector('#email');
const errorMessage = document.querySelector('#eror-message');
const notifyMeBtn = document.querySelector('#notifyMeBtn');

//email validation function

function ValidateEmail(inputE){

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(inputE.value.match(mailformat)){
    document.forms['form1'].submit();
    return true;
    
  }else if(inputE.value === ""){
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    errorMessage.innerText = "Whoops! It looks like you forgot to add your emails";
    
  }
  else{
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    errorMessage.innerText = "Please provide a valid email address";
  }


}

// add event listenr to Notify Me button

// notifyMeBtn.addEventListener("click", ValidateEmail(emailInput));