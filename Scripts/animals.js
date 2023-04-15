
if(window.location.href.includes("testimonies")) {
    const observer = new window.IntersectionObserver(([entry]) => {
        console.log(entry.boundingClientRect.top)
        if (entry.intersectionRatio > .4) {
            observer.unobserve(entry.target);
            document.querySelector(".rat").style.display = "block"
            setTimeout(() => {
                document.querySelector(".rat").style.top = "calc(100% - 6em)"
            }, 120)
            setTimeout(() => {
                document.querySelector(".rat").style.display = "none"
            }, 7000)


        }
    }, {
        root: null,
        threshold: 0,
    })
    observer.observe(document.querySelector("main div p.fallingRatStart"));
}



if(window.location.href.includes("smuggling")){

}