/* pentateuco */
function genesis() {
    const a = document.getElementsByClassName("genesis-info")[0]
    const b = document.getElementsByClassName("genesis-galery")[0]
    if (a.style.display==="none" && b.style.display==="none"){
        a.style.display="flex";
        b.style.display="flex";
    }else{
        a.style.display="none";
        b.style.display="none";        
    }
}
const bgenesis = document.getElementsByClassName("genesis")[0]
bgenesis.addEventListener("click",genesis)

function exodus() {
    const a = document.getElementsByClassName("exodus-info")[0]
    const b = document.getElementsByClassName("exodus-galery")[0]
    if (a.style.display==="none" && b.style.display==="none"){
        a.style.display="flex";
        b.style.display="flex";
    }else{
        a.style.display="none";
        b.style.display="none";        
    }
}
const bexodus = document.getElementsByClassName("exodus")[0]
bexodus.addEventListener("click",exodus)

function levitico() {
    const a = document.getElementsByClassName("levitico-info")[0]
    const b = document.getElementsByClassName("levitico-galery")[0]
    if (a.style.display==="none" && b.style.display==="none"){
        a.style.display="flex";
        b.style.display="flex";
    }else{
        a.style.display="none";
        b.style.display="none";        
    }
}
const blevitico = document.getElementsByClassName("levitico")[0]
blevitico.addEventListener("click",levitico)

function numeros() {
    const a = document.getElementsByClassName("numeros-info")[0]
    const b = document.getElementsByClassName("numeros-galery")[0]
    if (a.style.display==="none" && b.style.display==="none"){
        a.style.display="flex";
        b.style.display="flex";
    }else{
        a.style.display="none";
        b.style.display="none";        
    }
}
const bnumeros = document.getElementsByClassName("numeros")[0]
bnumeros.addEventListener("click",numeros)

function deuteronomio() {
    const a = document.getElementsByClassName("deuteronomio-info")[0]
    const b = document.getElementsByClassName("deuteronomio-galery")[0]
    if (a.style.display==="none" && b.style.display==="none"){
        a.style.display="flex";
        b.style.display="flex";
    }else{
        a.style.display="none";
        b.style.display="none";        
    }
}
const bdeuteronomio = document.getElementsByClassName("deuteronomio")[0]
bdeuteronomio.addEventListener("click",deuteronomio)

