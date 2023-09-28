const submenu1 = document.querySelector("#submenu1")
const submenu2 = document.querySelector("#submenu2")
const menuResponsivo = document.querySelector("#menu-responsivo")

const linkEmpresa = document.querySelector("#a-empresa")
const linkSubmenu = document.querySelector("#a-submenu")
const btnMenu = document.querySelector("#btn-menu")

const linkEmpresaResponsivo = document.querySelector("#a-empresa-responsivo")
const linkSubmenuResponsivo = document.querySelector("#a-submenu-responsivo")
const submenu1Responsivo = document.querySelector("#submenu1-responsivo")
const submenu2Responsivo = document.querySelector("#submenu2-responsivo")

linkEmpresa.addEventListener("click", (e) => {
    e.preventDefault();
    submenu1.style.display === "none" ? submenu1.style.display = "flex" : submenu1.style.display = "none";
})

linkSubmenu.addEventListener("click", (e) => {
    e.preventDefault();
    submenu2.style.display === "none" ? submenu2.style.display = "flex" : submenu2.style.display = "none";
})

btnMenu.addEventListener("click", (e) => {
    e.preventDefault();
    menuResponsivo.style.display === "none" ? menuResponsivo.style.display = "block" : menuResponsivo.style.display = "none";
})

linkEmpresaResponsivo.addEventListener("click", (e) => {
    e.preventDefault();
    submenu1Responsivo.style.display === "none" ? submenu1Responsivo.style.display = "block" : submenu1Responsivo.style.display = "none";
})

linkSubmenuResponsivo.addEventListener("click", (e) => {
    e.preventDefault();
    submenu2Responsivo.style.display === "none" ? submenu2Responsivo.style.display = "block" : submenu2Responsivo.style.display = "none";
})

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(()=>{
    nextImage()
}, 4000)

function nextImage(){
    count++;
    if(count > 4){
        count = 1
    }

    document.getElementById("radio"+count).checked = true
}

