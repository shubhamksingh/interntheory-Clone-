let course_arr=JSON.parse(localStorage.getItem("Course_data"))||[];
// console.log(course_arr);
course_arr.forEach(el => {
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.img;
    img.setAttribute("class","img1")
    let head=document.createElement("h2");
    head.innerText=el.title;
    head.setAttribute("class","head1")
    let p=document.createElement("p");
    p.innerText=el.desc;
    p.setAttribute("class","desc");
    div.append(img,head,p);
    div.setAttribute("class","course")
    let div1=document.createElement("div")
    div1.setAttribute("class","price");
    let div2=document.createElement("div");
    div2.setAttribute("class","foot");
    let p1=document.createElement("p");
    p1.setAttribute("class","np");
    let p2=document.createElement("h2");
    p2.setAttribute("class","price");
    let p3=document.createElement("h3");
    p3.setAttribute("class","emi")
    p1.innerText=`₹ ${el.price}`;
    p2.innerText=`₹ ${el.dis_price}`;
    p3.innerText=el.emi;
    let div4=document.createElement("div");
    let h1=document.createElement("h3");
    let a=document.createElement("a");
    a.innerText="View More";
    h1.innerText=a.innerText;
    let btn=document.createElement("button");
    btn.innerText="ADD TO CART"
    btn.style.backgroundColor="red";
    btn.style.color="white";
    let div5=document.createElement("div");
    div5.setAttribute("class","order")
    div5.append(h1,btn)
    div1.append(p1,p2)
    div4.append(div1,p3)
    let div3=document.createElement("div");
    div3.append(div,div2,div1,div4,div5);
    document.getElementById("asec2").append(div3)
    div3.setAttribute("class","main1")
});