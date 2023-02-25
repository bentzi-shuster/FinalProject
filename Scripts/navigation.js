let headerWrap = document.createElement("div")
headerWrap.innerHTML=`
<header id="header-headerElm">
    <div class="d-flex flex-row ">
        <a class="my-auto mx-4 logo-link"  href="index.html">
            <img src="Images/logo.png"  width="50" height="50" alt="logo of alcohol bottle and wine glass">
        </a>
        <span class="h4 fw-bolder p-3 d-block"> Tipsy Testing </span>
    </div>
<!--https://getbootstrap.com/docs/5.3/components/navbar/-->
<nav id="navbar-navElm" class="navbar navbar-expand-lg bg-body-tertiary ">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav w-100 d-flex justify-content-evenly">

                <li class="fw-bold nav-item">
                    <a class="nav-link ${window.location.pathname.includes("index.html")?"active":""}" ${window.location.pathname.includes("index.html")?"aria-current=\"page\"":""} href="index.html">Home</a>
                </li>


                <li class="fw-bold nav-item">
                    <a class="nav-link ${window.location.pathname.includes("contact.html")?"active":""}" ${window.location.pathname.includes("contact.html")?"aria-current=\"page\"":""} href="contact.html">Contact Us</a>
                </li>
                <li class="fw-bold nav-item">
                    <a class="nav-link ${window.location.pathname.includes("tips.html")?"active":""}" ${window.location.pathname.includes("tips.html")?"aria-current=\"page\"":""} href="tips.html">Study Tips</a>
                </li>
                <li class="fw-bold nav-item">
                    <a class="nav-link ${window.location.pathname.includes("smuggling.html")?"active":""}" ${window.location.pathname.includes("smuggling.html")?"aria-current=\"page\"":""} href="smuggling.html">Smuggling 101</a>
                </li>
                <li class="fw-bold nav-item">
                    <a class="nav-link ${window.location.pathname.includes("alternatives.html")?"active":""}" ${window.location.pathname.includes("alternatives.html")?"aria-current=\"page\"":""} href="alternatives.html">Alternatives for under 21</a>
                </li>
                <li class="fw-bold nav-item">
                    <a class="nav-link ${window.location.pathname.includes("testimonies.html")?"active":""}" ${window.location.pathname.includes("testimonies.html")?"aria-current=\"page\"":""} href="testimonies.html">Testimonies</a>
                </li>
            </ul>
        </div>
    </div>

</nav>

</header>
`
document.body.appendChild(headerWrap);
