import {navbar, footer, sidebar} from "../components/components.js";

document.querySelector("#navbar").innerHTML = navbar(); 
document.querySelector("#footer").innerHTML = footer(); 
document.querySelector("#overlay").innerHTML = sidebar(); 



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