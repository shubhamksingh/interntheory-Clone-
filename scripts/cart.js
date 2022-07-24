// import { navbar, footer, sidebar } from "../components/components.js";

// const x = document.getElementById('navbar');
// x.innerHTML = navbar();

// const f = document.getElementById('footer');
// f.innerHTML = footer();


let cart= JSON.parse(localStorage.getItem('cart'))|| [{
    img:"https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
    title:"IT Starter Pack (4 Courses)",
    desc:"Learn the most demanded skills in the IT industry today. Sign up for Web Development, Android App Development, R Programming and Data Analytics. A complete IT package to kickstart your career.",
    price:32999,
    dis_price:15999,
    emi:"EMI Starting at ₹915/month",
},
{
    img:"https://assets.interntheory.com/creative/courses/thumbnails/digital-marketing-course.png",
    title:"Digital Marketing Course",
    desc:"Learn the art of digital marketing. Sign up for this online digital marketing course and learn search engine optimisation (seo), social media marketing (smm), search engine marketing (sem) and many other social media strategies.",
    price:"₹ 11999",
    dis_price:5999,
    emi:"EMI Starting at ₹343/month",
},
{
    img:"https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png",
    title:"Data Analytics With R Programming Course",
    desc:"Learn data science online. Join this online data analytics course and kickstart your career in the fastest growing industry. Learn r programming, data wrangling, visualisations, statistics and other data analytic strategies.",
    price:11999,
    dis_price:5999,
    emi:"EMI Starting at ₹343/month",
}]

let display = (cart)=>{
    const x = document.getElementById('inner_left_box');
    x.innerHTML=null;
   cart.forEach((e,index)=>{
         const icon = document.createElement('img');
         icon.src=`https://upload.wikimedia.org/wikipedia/commons/8/8f/Flat_cross_icon.svg`;
         const img = document.createElement('img');
         img.src=e.img;
         const h2 = document.createElement('p');
         h2.innerText= e.title;
         const p = document.createElement('p');
         p.innerText= e.dis_price;
         const div = document.createElement('div');
         div.append(icon, img, h2, p, );
         div.setAttribute('class', 'cart_item')
         x.append(div);     
         icon.addEventListener('click', ()=>{
           cart= cart.filter((x,i)=> i!=index) ;
           display(cart);
           total(cart);
         })
        }) 
}
let total = (cart)=>{
    let t=0;
    cart.forEach(x=> t+=x.dis_price);
    let cgst= Math.ceil(t*0.09);
    let sgst = Math.ceil(t*0.09);
    let tt = t + cgst + sgst ;
    const a = document.getElementById('a');
    const b = document.getElementById('b');
    const c = document.getElementById('c');
    const d = document.getElementById('d');
    a.innerText= t;
    b.innerText= cgst;
    c.innerText=sgst;
    d.innerText = tt;
}
display(cart);
total(cart);


const checkout = document.getElementById('bt2').addEventListener('click',()=>{
    window.location.href= 'payment.html';
})

document.getElementById('bt1').addEventListener('click', ()=>{
    const coupon = document.getElementById('coupon').value;
    if(coupon == MASAI20){
        const d = document.getElementById('d');
        let temp = d.innerText;
        temp = +temp - Math.floor(+temp*20/100);
        d.innerText = temp;
    }

})


