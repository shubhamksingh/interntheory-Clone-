// ------ importing components -------

import {navbar, footer, sidebar} from "../components/components.js";

document.querySelector("#navbar").innerHTML = navbar(); 
document.querySelector("#footer").innerHTML = footer(); 
document.querySelector("#overlay").innerHTML = sidebar(); 




// ------ sidebar visibility -------

let showOverlay = ()=>{
    document.querySelector('body').setAttribute('class', 'no_scroll');
    document.querySelector("#overlay").style.display = "flex"
    document.querySelector("#sidebar").style.animationName = "showSidebar";

}

let removeOverlay = ()=>{
    document.querySelector('body').removeAttribute('class', 'no_scroll');
    document.querySelector("#sidebar").style.animationName = "hideSidebar";
    setTimeout(()=>{
        document.querySelector("#overlay").style.display = "none";
    }, 500)

}

document.querySelector("#navbarMenu").addEventListener('click', showOverlay)

document.querySelector("#closeSidebar").addEventListener('click', removeOverlay)

document.querySelector("#overlayDiv").addEventListener('click', removeOverlay)

let user = JSON.parse(localStorage.getItem('profile'));

document.querySelector("#sidebar>div>#sidebarUser").innerHTML = "Login/Signup";
document.querySelector("#sidebarUser").addEventListener('click', ()=>{
    window.location.href = "cblogin.html";
})

// ------ navbar functioning ------

document.querySelector("#navbar .fa-cart-shopping").addEventListener('click', ()=>{
    let cartArr = JSON.parse(localStorage.getItem('cart')) || [];
    if(cartArr.length==0){
        document.querySelector("#cartEmptyPopup").style.display = "flex";
        document.querySelector("#cartEmptyPopup").style.animationName = "showCartEmptyPopup";

        setTimeout(()=>{
            document.querySelector("#cartEmptyPopup").style.animationName = "hideCartEmptyPopup";
        }, 4700)
        setTimeout(()=>{
            document.querySelector("#cartEmptyPopup").style.display = "none";
        },5000)
    } else {
        window.location.href = "cart.html"
    }
})

document.querySelector("#cartEmptyPopup>.fa-xmark").addEventListener('click', ()=>{
    document.querySelector("#cartEmptyPopup").style.animationName = "hideCartEmptyPopup";
    setTimeout(()=>{
        document.querySelector("#cartEmptyPopup").style.display = "none";
    },300)
})



document.querySelector("#navbar .fa-user").addEventListener("mouseover", ()=>{
    document.querySelector("#logoutPopup").style.display = 'flex'
})
document.querySelector("#navbar .fa-user").addEventListener("mouseout", ()=>{
    document.querySelector("#logoutPopup").style.display = 'none'
})




document.querySelector("#navbar>div>img").addEventListener('click', ()=>{
    window.location.href = "index.html";
})
           
    


let logoutFun = ()=>{
    console.log(1)
    localStorage.removeItem('profile');
}
