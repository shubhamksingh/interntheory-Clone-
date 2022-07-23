let internship_arr=JSON.parse(localStorage.getItem("Internship_data"))
console.log(internship_arr)

internship_arr.forEach(el => {
         let div1=document.createElement("div");
         let div2=document.createElement("div");
    let t=document.createElement("h3");
    let name=document.createElement("h4");
    let pos=document.createElement("h3");
    let city=document.createElement("h3");
    let div=document.createElement("div");
    let stipend=document.createElement("h3")
    // let sal=document.createElement("p")
    let img=document.createElement("img");
    let apply=document.createElement("h3");
    let a=document.createElement("a");
    let dur=document.createElement("h3");
    a.innerText="View and Apply";
    a.href="./courses.html"
    a.setAttribute("class","link")
    dur.innerText=el.duration;
    apply.append(a)
    apply.setAttribute("class","blue")
    img.src=el.url;
    t.innerText=el.title;
    name.innerText=el.company_name;
    pos.innerText=el.role;
    city.innerText=el.city;
    stipend.innerText=el.stipend;
    div.append(img);
    div1.append(t,name,pos,city,stipend);
    div2.append(dur,apply)
    div.setAttribute("class","img1");
     div1.setAttribute("class","def")
     div2.setAttribute("class","apply")
     let cont=document.createElement("div");
     cont.append(div,div1,div2);
     cont.setAttribute("class","cont");
    document.getElementById("aside2").append(cont)
});