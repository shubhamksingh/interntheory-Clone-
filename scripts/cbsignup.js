



let hideFun = () => {
    
    let hidebox = document.querySelector("#hide");
    hidebox.classList.add("hdhide");
    let nextbut = document.querySelector("#snext");
    nextbut.style.marginTop="-330px";
    let cont = document.querySelector("#scont");
    cont.style.height="600px";

}
window.onload=hideFun();

let nonhideFun = () => {
    let nhbox = document.querySelector("#hide");
    nhbox.classList.remove("hdhide");
    let nextbut = document.querySelector("#snext");
    nextbut.style.marginTop="20px";
    let cont = document.querySelector("#scont");
    cont.style.height="auto";
}


document.querySelector("#spassword").addEventListener("click",nonhideFun);


let userArray = JSON.parse(localStorage.getItem("userDetails")) || [];
let nextFun = () => {
   
    let obj = {};
    obj.firstName = document.querySelector("#sfname").value;
    obj.lastName =  document.querySelector("#slname").value;
    obj.email =  document.querySelector("#semail").value;
    obj.password = document.querySelector("#spassword").value;
    obj.mobile = document.querySelector("#smobile").value;
    obj.city = document.querySelector("#scity").value;
    obj.preferences = document.querySelector("#spreferences").value;
    obj.find = document.querySelector("#sfind").value;
    obj.looking = document.querySelector("#slooking").value;
    obj.affiliatedCode = document.querySelector("#saffiliated").value;

    userArray.push(obj);
    
localStorage.setItem("userDetails",JSON.stringify(userArray));
let a= document.querySelector("#sfname").value;
let b=document.querySelector("#slname").value;
let c= document.querySelector("#semail").value;
let d=document.querySelector("#spassword").value;
let e=document.querySelector("#smobile").value;
let f=document.querySelector("#scity").value;
let g=document.querySelector("#spreferences").value;
let h=document.querySelector("#sfind").value;
let i=document.querySelector("#slooking").value;
let j=document.querySelector("#saffiliated").value;

    window.location.href="cbeducation.html";

    
}

document.querySelector("#snext").addEventListener("click",nextFun);