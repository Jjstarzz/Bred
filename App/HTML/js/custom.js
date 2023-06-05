var xValues = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var yValues = [25, 30, 44, 35, 55, 45 ,45];
var barColors = ["green", "green","green","green","green","black","black"];
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
var output2 = document.getElementById("value2");

//output.innerHTML = slider.value;

var element = document.body;
function darkMode() {
  changeImage();
}

function changeImage()
{ 
var img = document.getElementById("logo");



if(localStorage.getItem("night")=="no")
  {
element.classList.toggle("dark-mode"); 
img.src="../whitelogo.png";
if(typeof(document.getElementById("exampleUsername1")) != 'undefined' && document.getElementById("exampleUsername1") != null)
     document.getElementById("exampleUsername1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("exampleInputPassword1")) != 'undefined' && document.getElementById("exampleInputPassword1") != null)
     document.getElementById("exampleInputPassword1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("backtologin")) != 'undefined' && document.getElementById("backtologin") != null)
     document.getElementById("backtologin").style.backgroundColor="#212529";
     if(typeof(document.getElementById("createaccount")) != 'undefined' && document.getElementById("createaccount") != null)
     document.getElementById("createaccount").style.backgroundColor="#212529";
     if(typeof(document.getElementById("ConfirmInputPassword1")) != 'undefined' && document.getElementById("ConfirmInputPassword1") != null)
     document.getElementById("ConfirmInputPassword1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("exampleInputEmail1")) != 'undefined' && document.getElementById("exampleInputEmail1") != null)
     document.getElementById("exampleInputEmail1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("loginbutton")) != 'undefined' && document.getElementById("loginbutton") != null)
     document.getElementById("loginbutton").style.backgroundColor="#212529";
     if(typeof(document.getElementById("signupbutton")) != 'undefined' && document.getElementById("signupbutton") != null)
     document.getElementById("signupbutton").style.backgroundColor="#212529";
     if(typeof(document.getElementById("adjust")) != 'undefined' && document.getElementById("adjust") != null)
     document.getElementById("adjust").style.backgroundColor="#212529";
     if(typeof(document.getElementById("changeallocation")) != 'undefined' && document.getElementById("changeallocation") != null)
     document.getElementById("changeallocation").style.backgroundColor="#212529";
     if(typeof(document.getElementById("confirmbut")) != 'undefined' && document.getElementById("confirmbut") != null)
     document.getElementById("confirmbut").style.backgroundColor="#212529";
     if(typeof(document.getElementById("budgetbox")) != 'undefined' && document.getElementById("budgetbox") != null)
     document.getElementById("budgetbox").style.backgroundColor="#212529";
     if(typeof(document.getElementById("btn2")) != 'undefined' && document.getElementById("btn2") != null)
     document.getElementById("btn2").style.backgroundColor="#212529";
     if(typeof(document.getElementById("btn1")) != 'undefined' && document.getElementById("btn1") != null)
     document.getElementById("btn1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("text1")) != 'undefined' && document.getElementById("text1") != null)
     document.getElementById("text1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("SinglePaymentInput")) != 'undefined' && document.getElementById("SinglePaymentInput") != null)
     document.getElementById("SinglePaymentInput").style.backgroundColor="#212529";
     if(typeof(document.getElementById("RecurringPaymentInput")) != 'undefined' && document.getElementById("RecurringPaymentInput") != null)
     document.getElementById("RecurringPaymentInput").style.backgroundColor="#212529";
 localStorage.setItem("night", "yes");
  }
else
  {
element.classList.toggle("dark-mode");
img.src="https://cdn.discordapp.com/attachments/905120820198772826/939869460985184296/logo.png";
if(typeof(document.getElementById("exampleUsername1")) != 'undefined' && document.getElementById("exampleUsername1") != null)
     document.getElementById("exampleUsername1").style.backgroundColor="white";
     if(typeof(document.getElementById("exampleInputPassword1")) != 'undefined' && document.getElementById("exampleInputPassword1") != null)
     document.getElementById("exampleInputPassword1").style.backgroundColor="white";
     if(typeof(document.getElementById("backtologin")) != 'undefined' && document.getElementById("backtologin") != null)
     document.getElementById("backtologin").style.backgroundColor="white";
     if(typeof(document.getElementById("createaccount")) != 'undefined' && document.getElementById("createaccount") != null)
     document.getElementById("createaccount").style.backgroundColor="white";
     if(typeof(document.getElementById("ConfirmInputPassword1")) != 'undefined' && document.getElementById("ConfirmInputPassword1") != null)
     document.getElementById("ConfirmInputPassword1").style.backgroundColor="white";
     if(typeof(document.getElementById("exampleInputEmail1")) != 'undefined' && document.getElementById("exampleInputEmail1") != null)
     document.getElementById("exampleInputEmail1").style.backgroundColor="white";
     if(typeof(document.getElementById("loginbutton")) != 'undefined' && document.getElementById("loginbutton") != null)
     document.getElementById("loginbutton").style.backgroundColor="white";
     if(typeof(document.getElementById("signupbutton")) != 'undefined' && document.getElementById("signupbutton") != null)
     document.getElementById("signupbutton").style.backgroundColor="white";
     if(typeof(document.getElementById("adjust")) != 'undefined' && document.getElementById("adjust") != null)
     document.getElementById("adjust").style.backgroundColor="white";
     if(typeof(document.getElementById("changeallocation")) != 'undefined' && document.getElementById("changeallocation") != null)
     document.getElementById("changeallocation").style.backgroundColor="white";
     if(typeof(document.getElementById("confirmbut")) != 'undefined' && document.getElementById("confirmbut") != null)
     document.getElementById("confirmbut").style.backgroundColor="white";
     if(typeof(document.getElementById("budgetbox")) != 'undefined' && document.getElementById("budgetbox") != null)
     document.getElementById("budgetbox").style.backgroundColor="white";
     if(typeof(document.getElementById("btn2")) != 'undefined' && document.getElementById("btn2") != null)
     document.getElementById("btn2").style.backgroundColor="white";
     if(typeof(document.getElementById("btn1")) != 'undefined' && document.getElementById("btn1") != null)
     document.getElementById("btn1").style.backgroundColor="white";
     if(typeof(document.getElementById("text1")) != 'undefined' && document.getElementById("text1") != null)
     document.getElementById("text1").style.backgroundColor="white";
     if(typeof(document.getElementById("SinglePaymentInput")) != 'undefined' && document.getElementById("SinglePaymentInput") != null)
     document.getElementById("SinglePaymentInput").style.backgroundColor="white";
     if(typeof(document.getElementById("RecurringPaymentInput")) != 'undefined' && document.getElementById("RecurringPaymentInput") != null)
     document.getElementById("RecurringPaymentInput").style.backgroundColor="white";
 localStorage.setItem("night", "no");
  }
return false;
}
function checkNight()
{
  var img = document.getElementById("logo");

   if(localStorage.getItem("night")=="yes")
   {
    element.classList.toggle("dark-mode"); 
    img.src="../whitelogo.png";
     if(typeof(document.getElementById("exampleUsername1")) != 'undefined' && document.getElementById("exampleUsername1") != null)
     document.getElementById("exampleUsername1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("exampleInputPassword1")) != 'undefined' && document.getElementById("exampleInputPassword1") != null)
     document.getElementById("exampleInputPassword1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("backtologin")) != 'undefined' && document.getElementById("backtologin") != null)
     document.getElementById("backtologin").style.backgroundColor="#212529";
     if(typeof(document.getElementById("createaccount")) != 'undefined' && document.getElementById("createaccount") != null)
     document.getElementById("createaccount").style.backgroundColor="#212529";
     if(typeof(document.getElementById("ConfirmInputPassword1")) != 'undefined' && document.getElementById("ConfirmInputPassword1") != null)
     document.getElementById("ConfirmInputPassword1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("exampleInputEmail1")) != 'undefined' && document.getElementById("exampleInputEmail1") != null)
     document.getElementById("exampleInputEmail1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("loginbutton")) != 'undefined' && document.getElementById("loginbutton") != null)
     document.getElementById("loginbutton").style.backgroundColor="#212529";
     if(typeof(document.getElementById("signupbutton")) != 'undefined' && document.getElementById("signupbutton") != null)
     document.getElementById("signupbutton").style.backgroundColor="#212529";
     if(typeof(document.getElementById("adjust")) != 'undefined' && document.getElementById("adjust") != null)
     document.getElementById("adjust").style.backgroundColor="#212529";
     if(typeof(document.getElementById("changeallocation")) != 'undefined' && document.getElementById("changeallocation") != null)
     document.getElementById("changeallocation").style.backgroundColor="#212529";
     if(typeof(document.getElementById("confirmbut")) != 'undefined' && document.getElementById("confirmbut") != null)
     document.getElementById("confirmbut").style.backgroundColor="#212529";
     if(typeof(document.getElementById("budgetbox")) != 'undefined' && document.getElementById("budgetbox") != null)
     document.getElementById("budgetbox").style.backgroundColor="#212529";
     if(typeof(document.getElementById("btn2")) != 'undefined' && document.getElementById("btn2") != null)
     document.getElementById("btn2").style.backgroundColor="#212529";
     if(typeof(document.getElementById("btn1")) != 'undefined' && document.getElementById("btn1") != null)
     document.getElementById("btn1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("text1")) != 'undefined' && document.getElementById("text1") != null)
     document.getElementById("text1").style.backgroundColor="#212529";
     if(typeof(document.getElementById("SinglePaymentInput")) != 'undefined' && document.getElementById("SinglePaymentInput") != null)
     document.getElementById("SinglePaymentInput").style.backgroundColor="#212529";
     if(typeof(document.getElementById("RecurringPaymentInput")) != 'undefined' && document.getElementById("RecurringPaymentInput") != null)
     document.getElementById("RecurringPaymentInput").style.backgroundColor="#212529";
     localStorage.setItem("night", "yes");
   }
   else
    if((localStorage.getItem("night")=="no"))
   {
    element.classList.toggle("dark-mode");
    element.classList.toggle("dark-mode");
    img.src="https://cdn.discordapp.com/attachments/905120820198772826/939869460985184296/logo.png";
    if(typeof(document.getElementById("exampleUsername1")) != 'undefined' && document.getElementById("exampleUsername1") != null)
     document.getElementById("exampleUsername1").style.backgroundColor="white";
     if(typeof(document.getElementById("exampleInputPassword1")) != 'undefined' && document.getElementById("exampleInputPassword1") != null)
     document.getElementById("exampleInputPassword1").style.backgroundColor="white";
     if(typeof(document.getElementById("backtologin")) != 'undefined' && document.getElementById("backtologin") != null)
     document.getElementById("backtologin").style.backgroundColor="white";
     if(typeof(document.getElementById("createaccount")) != 'undefined' && document.getElementById("createaccount") != null)
     document.getElementById("createaccount").style.backgroundColor="white";
     if(typeof(document.getElementById("ConfirmInputPassword1")) != 'undefined' && document.getElementById("ConfirmInputPassword1") != null)
     document.getElementById("ConfirmInputPassword1").style.backgroundColor="white";
     if(typeof(document.getElementById("exampleInputEmail1")) != 'undefined' && document.getElementById("exampleInputEmail1") != null)
     document.getElementById("exampleInputEmail1").style.backgroundColor="white";
     if(typeof(document.getElementById("loginbutton")) != 'undefined' && document.getElementById("loginbutton") != null)
     document.getElementById("loginbutton").style.backgroundColor="white";
     if(typeof(document.getElementById("signupbutton")) != 'undefined' && document.getElementById("signupbutton") != null)
     document.getElementById("signupbutton").style.backgroundColor="white";
     if(typeof(document.getElementById("adjust")) != 'undefined' && document.getElementById("adjust") != null)
     document.getElementById("adjust").style.backgroundColor="white";
     if(typeof(document.getElementById("changeallocation")) != 'undefined' && document.getElementById("changeallocation") != null)
     document.getElementById("changeallocation").style.backgroundColor="white";
     if(typeof(document.getElementById("confirmbut")) != 'undefined' && document.getElementById("confirmbut") != null)
     document.getElementById("confirmbut").style.backgroundColor="white";
     if(typeof(document.getElementById("budgetbox")) != 'undefined' && document.getElementById("budgetbox") != null)
     document.getElementById("budgetbox").style.backgroundColor="white";
     if(typeof(document.getElementById("btn2")) != 'undefined' && document.getElementById("btn2") != null)
     document.getElementById("btn2").style.backgroundColor="white";
     if(typeof(document.getElementById("btn1")) != 'undefined' && document.getElementById("btn1") != null)
     document.getElementById("btn1").style.backgroundColor="white";
     if(typeof(document.getElementById("text1")) != 'undefined' && document.getElementById("text1") != null)
     document.getElementById("text1").style.backgroundColor="white";
     if(typeof(document.getElementById("SinglePaymentInput")) != 'undefined' && document.getElementById("SinglePaymentInput") != null)
     document.getElementById("SinglePaymentInput").style.backgroundColor="white";
     if(typeof(document.getElementById("RecurringPaymentInput")) != 'undefined' && document.getElementById("RecurringPaymentInput") != null)
     document.getElementById("RecurringPaymentInput").style.backgroundColor="white";
     localStorage.setItem("night", "no");
   }
   


   
     
}
/*
slider.oninput = function()
{
  output.innerHTML = this.value;
  output2.innerHTML = 100 - this.value;
}
*/
/*
new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
 
}
);
*/