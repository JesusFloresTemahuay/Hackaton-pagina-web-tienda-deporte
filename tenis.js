import { productos } from './productos.js';

const MAX_DESC = 80;

function cargaTenis(){
     console.log("cargando tenis");
    let idc = "tenis0X-";
    let id = idc;
    let cou = Math.floor(Math.random() * 8)+16;

    for (let index = 1; index <= 4; index++) {
        id = id.replace("X", "" + index);
        cou = Math.floor(Math.random() * 8)+16;

        document.getElementById(id+"marca").innerText = productos[cou].marca + " - " + productos[cou].nombre;
        document.getElementById(id+"imagen").src = productos[cou].imagenes[0];
        document.getElementById(id+"precio").innerText = productos[cou].precio;
        if (productos[cou].descripcion.length > MAX_DESC) {
            document.getElementById(id+"descripcion").innerText = productos[cou].
            descripcion.substring(0, MAX_DESC - 1) + "... ";
        } else {
            document.getElementById(id+"descripcion").innerText = productos[cou].descripcion
        }
        console.log(id + " cargando: " + id);
        id = idc;
    }
    
}

cargaTenis();