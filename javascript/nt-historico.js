/* pentateuco */
function apostolos() {
    const a = document.getElementsByClassName("apostolos-info")[0]
    const b = document.getElementsByClassName("apostolos-galery")[0]
    if (a.style.display==="none" && b.style.display==="none"){
        a.style.display="flex";
        b.style.display="flex";
    }else{
        a.style.display="none";
        b.style.display="none";        
    }
}
const bapostolos = document.getElementsByClassName("apostolos")[0]
bapostolos.addEventListener("click",apostolos)

