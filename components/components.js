
let navbar = () => {
    return `<div>
                <i id="navbarMenu" class="fa-solid fa-bars"></i>
                <img src="https://assets.interntheory.com/creative/logo.png" alt="">
            </div>
            <div>
                <i class="fa-solid fa-bell"></i>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-user"><div onclick="logoutFun()" id="logoutPopup"><i class="fa-solid fa-arrow-right-from-bracket"></i>Log Out</div></i>
                <div id="cartEmptyPopup"> <i class="fa-solid fa-triangle-exclamation"></i> There are no items in the cart <i class="fa-solid fa-xmark"></i></div>
                
            </div>`
}

let footer = () => {
    return `<div id="footMainBox">
                <div id="footBox1">
                    <div class="footBoxDiv footIconsDiv">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>

                    <div class="footBoxDiv">
                        <p>BY PLACE</p>
                        <p>Internships In Mumbai</p>
                        <p>Internships In Delhi</p>
                        <p>Internships In Bangalore</p>
                        <p>Internships In Pune</p>
                        <p>Internships In Hyderabad</p>
                    </div>

                    <div class="footBoxDiv">
                        <p>BY PROFILE</p>
                        <p>Marketing Internships</p>
                        <p>Business Development Internships</p>
                        <p>Content Writing Internships</p>
                        <p>Graphic Designing Internships</p>
                        <p>HR Internships</p>
                        <p>Engineering Internships</p>

                    </div>

                    <div class="footBoxDiv">
                        <p>BY TYPE</p>
                        <p>Full Time Internships</p>
                        <p>Part Time Internships</p>
                        <p>Work From Home Internships</p>
                    </div>

                </div>
                <div id="footBox2">
                    <div class="footBoxDiv2">
                       <p>REFUND & CANCELLATION POLICY</p> 
                       <p>COURSES</p> 
                       <p>TERMS AND CONDITIONS</p> 
                       <p>PRIVACY POLICY</p> 
                       <p>CONTACT US</p> 
                       <p>ABOUT US</p> 
                       <p>SITEMAP</p> 
                    </div>
                    <div class="footBoxDiv2">
                        <p>© 2015 - 2022 INTERNTHEORY. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>`
}

let sidebar = ()=>{
    return `<div id="sidebar">
                <div>
                    <img src="https://assets.interntheory.com/creative/logo.png" alt="">
                    <i id="closeSidebar" class="fa-solid fa-circle-xmark"></i>
                </div>

                <div>           
                    <i class="fa-solid fa-user"></i>
                    <p id="sidebarUser">Username</p>
                </div>

                <div>
                    <a href="cbprofile.html"><p>
                        <i class="fa-solid fa-user"></i>
                        Profile
                    </p></a>
                    <a href="internship.html"><p>
                        <i class="fa-solid fa-list"></i>
                        Internships
                    </p></a>
                    <a href="jobs.html"><p>
                        <i class="fa-solid fa-briefcase"></i>
                        Jobs
                    </p></a>
                    <a href="courses.html"><p>
                        <i class="fa-solid fa-book-bookmark"></i>
                        Courses
                    </p></a>
                    <a href="contact.html"><p>
                        <i class="fa-solid fa-phone"></i>
                        Contact Us  
                    </p></a>
                    <div></div>
                    <a onclick="logoutFun()"><p>
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        Logout
                    </p></a>
                </div>
            </div>
            <div id="overlayDiv"></div>`
}

export {navbar, footer, sidebar}



