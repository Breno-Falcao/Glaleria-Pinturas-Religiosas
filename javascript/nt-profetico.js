/* pentateuco */
function apocalipse() {
    const a = document.getElementsByClassName("apocalipse-info")[0]
    const b = document.getElementsByClassName("apocalipse-galery")[0]
    if (a.style.display==="none" && b.style.display==="none"){
        a.style.display="flex";
        b.style.display="flex";
    }else{
        a.style.display="none";
        b.style.display="none";        
    }
}
const bapocalipse = document.getElementsByClassName("apocalipse")[0]
bapocalipse.addEventListener("click",apocalipse)
