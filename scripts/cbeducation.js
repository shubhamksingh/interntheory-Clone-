
let addDetails = JSON.parse(localStorage.getItem("userDetails"));
let addFun = () => {
    window.location.href="cbprofile.html";
    let eduobj={};
    eduobj.level = document.querySelector("#elevel").value;
    eduobj.institute = document.querySelector("#einsti").value;
    eduobj.degree = document.querySelector("#edegree").value;
    eduobj.year = document.querySelector("#eyear").value;
    eduobj.passing = document.querySelector("#epassing").value;
    addDetails.push(eduobj);

    //localStorage.setItem("userDetails",JSON.stringify(addDetails));
}

document.querySelector("#eadd").addEventListener("click",addFun);