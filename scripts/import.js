import {navbar, footer, sidebar} from "../components/components.js";

document.querySelector("#navbar").innerHTML = navbar(); 
document.querySelector("#footer").innerHTML = footer(); 
document.querySelector("#overlay").innerHTML = sidebar(); 



// ------ sidebar visibility -------

let showOverlay = ()=>{
        document.querySelector('body').setAttribute('class', 'no_scroll');
        document.querySelector("#overlay").style.display = "flex"
    
    }
    
    let removeOverlay = ()=>{
        document.querySelector('body').removeAttribute('class', 'no_scroll');
        document.querySelector("#overlay").style.display = "none";
    
    }
    
    document.querySelector("#navbarMenu").addEventListener('click', showOverlay)
    
    document.querySelector("#closeSidebar").addEventListener('click', removeOverlay)
    
    document.querySelector("#overlayDiv").addEventListener('click', removeOverlay)
    
    
    
    // ------ navbar functioning ------
    
    document.querySelector("#navbar .fa-cart-shopping").addEventListener('click', ()=>{
        let cartArr = [];
        if(cartArr.length==0){
            document.querySelector("#cartEmptyPopup").style.display = "flex";
    
            setTimeout(()=>{
                document.querySelector("#cartEmptyPopup").style.display = "none";
            }, 5000)
        } else {
            window.location.href = "cart.html"
        }
    })
    
    document.querySelector("#cartEmptyPopup>.fa-xmark").addEventListener('click', ()=>{
        document.querySelector("#cartEmptyPopup").style.display = "none";
    })
    
    
    
    document.querySelector("#navbar .fa-user").addEventListener("mouseover", ()=>{
        document.querySelector("#logoutPopup").style.display = 'flex'
    })
    document.querySelector("#navbar .fa-user").addEventListener("mouseout", ()=>{
        document.querySelector("#logoutPopup").style.display = 'none'
    })
    

// paste the below codes in you html file

            /* <div id="navbar"></div>
                        (on the top of the body)

            <div id="overlay"></div>
                        (just below the navbar)


            <div id="footer"></div> 
                        (at the end of the body)
            */
           

// linking the script and styles
 


{/* 

                ------ scripts -----

        <script src="scripts/import.js" type="module"></script>

        


                ------ styles ------
                
        <link rel="stylesheet" href="styles/navbar.css">
        <link rel="stylesheet" href="styles/footer.css">
        <link rel="stylesheet" href="styles/sidebar.css">  
        <script src="https://kit.fontawesome.com/e6e10a16ef.js" crossorigin="anonymous"></script>


 */}