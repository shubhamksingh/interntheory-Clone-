// import { navbar, footer, sidebar } from "../components/components.js";

// const x = document.getElementById('navbar');
// x.innerHTML = navbar();

// const f = document.getElementById('footer');
// f.innerHTML = footer();


let cart= JSON.parse(localStorage.getItem('cart'))|| [{
    img:"https://assets.interntheory.com/creative/courses/thumbnails/it.jpg",
    title:"IT Starter Pack (4 Courses)",
    desc:"Learn the most demanded skills in the IT industry today. Sign up for Web Development, Android App Development, R Programming and Data Analytics. A complete IT package to kickstart your career.",
    price:"₹ 32999",
    dis_price:"₹ 15999",
    emi:"EMI Starting at ₹915/month",
},
{
    img:"https://assets.interntheory.com/creative/courses/thumbnails/digital-marketing-course.png",
    title:"Digital Marketing Course",
    desc:"Learn the art of digital marketing. Sign up for this online digital marketing course and learn search engine optimisation (seo), social media marketing (smm), search engine marketing (sem) and many other social media strategies.",
    price:"₹ 11999",
    dis_price:"₹ 5999",
    emi:"EMI Starting at ₹343/month",
},
{
    img:"https://assets.interntheory.com/creative/courses/thumbnails/data-analytics-r-programming-course.png",
    title:"Data Analytics With R Programming Course",
    desc:"Learn data science online. Join this online data analytics course and kickstart your career in the fastest growing industry. Learn r programming, data wrangling, visualisations, statistics and other data analytic strategies.",
    price:"₹ 11999",
    dis_price:"₹ 5999",
    emi:"EMI Starting at ₹343/month",
}]

let display = (cart)=>{
    const x = document.getElementById('inner_left_box');
    x.innerHTML=null;
   cart.forEach(e=>{
         const icon = document.createElement('img');
         icon.src=`https://upload.wikimedia.org/wikipedia/commons/8/8f/Flat_cross_icon.svg`;
         const img = document.createElement('img');
         img.src=e.img;
         const h2 = document.createElement('p');
         h2.innerText= e.title;
         const p = document.createElement('p');
         p.innerText= e.price;
         const div = document.createElement('div');
         div.append(icon, img, h2, p, );
         div.setAttribute('class', 'cart_item')
         x.append(div);     
        }) 
}
display(cart);





