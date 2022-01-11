function validate(){
  var username=document.getElementById("email").value;
  var username=document.getElementById("password").value;
  if(email=="prishupandey01142@gmail.com" && password=="123456789")
  {
    alert("Login Successful");
    return false;
  }
  else{
    alert("Login Failed");
  }
}