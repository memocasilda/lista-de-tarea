const input = document.getElementById("agregar_tarea");
console.log(input);
const mas = document.getElementById("agregar");
console.log(agregar);
const lista = document.getElementById("lista2");

const agregarTarea = (tarea) => {
    const elemento = `<li>
                    <i class="fas fa-circle co check" id="check" data-="check"></i>
                    <p class="tarea tachado" id="tarea">${tarea}</p>
                    <i class="fas fa-trash de borrar" id="borrar" data-="borrar"></i>
                </li>`
                lista.insertAdjacentHTML("beforeend", elemento);
};


// llamas funcion

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

const cambiarEstilo = () => {
    const link = document.getElementById("style");
    link.href = link.href.includes("style.css") ? "style2.css" : "style.css";

};

