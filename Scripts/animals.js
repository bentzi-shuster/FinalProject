/* DEVELOPER: Benjamin Shuster, IS117-002, Spring 2023 */
if(window.location.href.includes("testimonies")) {

            document.querySelector(".rat").style.display = "block"
            setTimeout(() => {
                document.querySelector(".rat").style.top = "calc(100% - 6em)"
                document.querySelector(".rat").style.zIndex = "1"
            }, 120)
            setTimeout(() => {
                document.querySelector(".rat").style.display = "none"
            }, 7000)

}



if(window.location.href.includes("smuggling")){
    let stoprunning=false
document.querySelector(".squirrel").addEventListener("pointerover",(e)=>{
    if(!stoprunning){
stoprunning=true
        let conf = confirm("hey... do you by any chance get nauseous very easily? If so you might not want to continue to this part of the site. Press cancel or esc on this popup to stop the effect and press ok or enter if you are brave enough to continue.")
        if(conf){
            let audio = new Audio('Audio/Party.mp3');
            audio.play();
            document.body.classList.add("wave")
            document.querySelector(".discoball").style.display="block"
            document.querySelectorAll(".discolight").forEach((elm)=>{
                elm.style.display="block"
                elm.style.animationPlayState="playing"
                document.querySelector("canvas").style.display="none"
                document.body.style.display="block"
            })
            setTimeout(()=>{
                document.body.classList.remove("wave");
                stoprunning=false
                document.querySelector(".discoball").style.display=""
                document.querySelectorAll(".discolight").forEach((elm)=>{
                    elm.style.display=""
                    elm.style.animationPlayState=""
                    document.querySelector("canvas").style.display=""
                    document.body.style.display=""
                })
            },36000)
        }
        }

})



}