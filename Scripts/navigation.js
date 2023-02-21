const navlinks = document.getElementsByClassName("nav-link");
for( let i=0; i<navlinks.length;i++){
    const navlink= navlinks[i];
    navlink.addEventListener("click",(e)=>{
        e.preventDefault();
        if(navlink.classList.contains("active")===true) return;
        const curPage = document.querySelector(".nav-link.active");
        curPage.classList.remove("active");
        curPage.removeAttribute("aria-current");
        navlink.classList.add("active");
        navlink.setAttribute("aria-current","page");
        const frame = document.getElementById("content");
        frame.src=navlink.href;
    })
}
const logo=document.getElementsByClassName("logo-link")[0];
logo.addEventListener("click",(e)=> {
    e.preventDefault();
    const home_navlink = document.querySelector('a.nav-link[href="home.html"]');
    const curPage = document.querySelector(".nav-link.active");
    curPage.classList.remove("active");
    curPage.removeAttribute("aria-current");
    home_navlink.classList.add("active");
    home_navlink.setAttribute("aria-current", "page");
    const frame = document.getElementById("content");
    frame.src = home_navlink.href;
})