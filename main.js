const input = document.getElementById("agregar_tarea");
console.log(input);
const mas = document.getElementById("agregar");
console.log(agregar);
const lista = document.getElementById("lista2");

const hecho = 'fa-check-circle';
const pendiente = 'fa-circle';
const tachado = 'tachado';


const agregarTarea = (tarea, check) => {
    const estado = check ? hecho : pendiente;
    const tachar = check ? tachado : "";

    const elemento = `<li>
                    <i class="far ${estado} check" id="check" data="check"></i>
                    <p class="tarea ${tachar}" id="tarea">${tarea}</p>
                    <i class="fas fa-trash de borrar" id="borrar" data="borrar"></i>
                </li>`
                lista.insertAdjacentHTML("beforeend", elemento);
};

const tareaRealizada = (element) => {
    element.classList.toggle (hecho);
    element.classList.toggle (pendiente);
    element.parentNode.querySelector('.tarea').classList.toggle(tachado);
    };

    const tareaEliminada = (element) => {
        element.parentNode.parentNode.removeChild(element.parentNode);

        

    };

    const cambiarEstilo = () => {
        const link = document.getElementById("style");
        link.href = link.href.includes("style.css") ? "style2.css" : "style.css";
    
    };


// llamar funciones

mas.addEventListener('click', () => {
const tarea = input.value 
if (tarea) {
    agregarTarea(tarea)
}
input.value = "";
})

// llamar a la función apretando enter

document.addEventListener("keyup", (e) => {
    if(e.key == 'Enter'){
        const tarea = input.value 
if (tarea) {
    agregarTarea(tarea)
}
input.value = "";
    }
}

)

lista.addEventListener('click', function (event){
    const elementData = element.atributes.data.value;
    if (elementData == 'check'){
        tareaRealizada (element)
    }

    else if (elementData =='borrar'){
        tareaEliminada (element)
    }

}
)


