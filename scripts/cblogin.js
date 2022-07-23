
let loginFun =  () => {

let dataUser = JSON.parse(localStorage.getItem("userDetails"));
console.log(dataUser);
let count=0;
dataUser.forEach((el) => {
  
    let email = document.querySelector(".lmail").value ;
    let password = document.querySelector(".lpassword").value;
if(email === el.email && password === el.password)
{
    localStorage.setItem("profile",JSON.stringify(el));
   
    window.location.href="cbprofile.html";
}
else{
    count++;
}
if(count==dataUser.length)
{
    alert("Wrong Credentials");
}
});
}

document.querySelector("#llog").addEventListener("click",loginFun);