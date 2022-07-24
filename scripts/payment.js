const  btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const x = document.getElementById("payment");
  setTimeout(() => {
    x.innerHTML = null;
    const img = document.createElement("img");
    img.src = `https://cdn.dribbble.com/users/957410/screenshots/3226085/dribbble-gif.gif`;
    x.append(img);
  }, 1000);
  setTimeout(() => {
    x.innerHTML = null;
    const img = document.createElement("img");
    img.src = `https://www.btec.ae/wp-content/uploads/2021/10/success.gif`;
    x.append(img);
  }, 6000);
  setTimeout(() => {
    x.innerHTML = null;
    const img = document.createElement("img");
    img.src = `https://i.gifer.com/Mhys.gif`;
    x.append(img);
    setTimeout(() => {
        let purchase = localStorage.getItem('cart');
        localStorage.setItem('purchase', purchase);
        localStorage.setItem('cart', JSON.stringify([]));
        window.location.href='index.html';
    }, 7000);
  }, 11000); 

  
});

function payment(){
   
}