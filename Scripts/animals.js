/* DEVELOPER: Benjamin Shuster, IS117-002, Spring 2023 */
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
    let stoprunning=false
document.querySelector(".squirrel").addEventListener("pointerover",(e)=>{
    if(!stoprunning){
stoprunning=true
        let conf = confirm("hey... do you by any chance get nauseous very easily? If so you might not want to continue to this part of the site. Press cancel or esc on this popup to stop the effect and press ok or enter if you are brave enough to continue.")
        if(conf){
            document.body.classList.add("wave")
            document.querySelector(".discoball").style.display="block"
            document.querySelectorAll(".discolight").forEach((elm)=>{
                elm.style.display="block"
                elm.style.animationPlayState="playing"
            })
            setTimeout(()=>{
                document.body.classList.remove("wave");
                stoprunning=false
                document.querySelector(".discoball").style.display=""
                document.querySelectorAll(".discolight").forEach((elm)=>{
                    elm.style.display=""
                    elm.style.animationPlayState=""
                })
            },4000)
        }
        }

})



}