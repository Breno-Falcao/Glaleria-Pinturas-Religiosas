/* pentateuco */
function mateus() {
    const a = document.getElementsByClassName("mateus-info")[0]
    const b = document.getElementsByClassName("mateus-galery")[0]
    if (a.style.display==="none" && b.style.display==="none"){
        a.style.display="flex";
        b.style.display="flex";
    }else{
        a.style.display="none";
        b.style.display="none";        
    }
}
const bmateus = document.getElementsByClassName("mateus")[0]
bmateus.addEventListener("click",mateus)

function marcos() {
    const a = document.getElementsByClassName("marcos-info")[0]
    const b = document.getElementsByClassName("marcos-galery")[0]
    if (a.style.display==="none" && b.style.display==="none"){
        a.style.display="flex";
        b.style.display="flex";
    }else{
        a.style.display="none";
        b.style.display="none";        
    }
}
const bmarcos = document.getElementsByClassName("marcos")[0]
bmarcos.addEventListener("click",marcos)

function lucas() {
    const a = document.getElementsByClassName("lucas-info")[0]
    const b = document.getElementsByClassName("lucas-galery")[0]
    if (a.style.display==="none" && b.style.display==="none"){
        a.style.display="flex";
        b.style.display="flex";
    }else{
        a.style.display="none";
        b.style.display="none";        
    }
}
const blucas = document.getElementsByClassName("lucas")[0]
blucas.addEventListener("click",lucas)

function joao() {
    const a = document.getElementsByClassName("joao-info")[0]
    const b = document.getElementsByClassName("joao-galery")[0]
    if (a.style.display==="none" && b.style.display==="none"){
        a.style.display="flex";
        b.style.display="flex";
    }else{
        a.style.display="none";
        b.style.display="none";        
    }
}
const bjoao = document.getElementsByClassName("joao")[0]
bjoao.addEventListener("click",joao)



