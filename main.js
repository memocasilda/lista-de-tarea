const fecha = document.getElementById("fecha");
const input = document.getElementById("agregar_tarea");
console.log(input);
const mas = document.getElementById("agregar");
console.log(agregar);
const lista = document.getElementById("lista2");

const hecho = 'fa-check-circle';
const pendiente = 'fa-circle';
const tachado = 'tachado';

let id=0;
let LIST = [];

const fechaActual = new Date();
fecha.innerHTML= fechaActual.toLocaleDateString('es-AR', {
year: 'numeric',
weekday:'long',
month:'long',
day:'numeric',
});


const agregarTarea = (tarea,check,eliminado,id) => {
    if(eliminado){return}
    const estado = check ? hecho : pendiente;
    const tachar = check ? tachado : "";

    const elemento = `<li>
                    <i class="far ${estado} check" id="${id}" data="check"></i>
                    <p class="tarea ${tachar}" >${tarea}</p>
                    <i class="fas fa-trash de borrar" id="${id}" data="borrar"></i>
                </li>`
                lista.insertAdjacentHTML("beforeend", elemento);
};

const tareaRealizada = (element) => {
    element.classList.toggle (hecho);
    element.classList.toggle (pendiente);
    element.parentNode.querySelector('.tarea').classList.toggle(tachado);

    LIST[element.id].check = !LIST[element.id].check;

    console.log(LIST[element.id]);


    };

    const tareaEliminada = (element) => {
        element.parentNode.parentNode.removeChild(element.parentNode);

        

    };

    
const cambiarEstilos = () => {
        const link = document.getElementById("style");
        link.href = link.href.includes("style.css") ? "style2.css" : "style.css";
    
    };



// llamar funciones

mas.addEventListener('click', () => {
const tarea = input.value 
if (tarea.length > 20){
    alert("La tarea no puede tener más de 20 caracteres.");
    return;
}

    if(tarea){

    agregarTarea(tarea,false,false,id);
    LIST.push({
        id: id,
        check: false,
        tarea: tarea,
        eliminado: false
    });
    localStorage.setItem("GUARDADO", JSON.stringify(LIST));
    id++;

input.value = "";
console.log(LIST)
    }
})

// llamar a la función apretando enter

document.addEventListener("keyup", (e) => {
    if(e.key == 'Enter'){
        const tarea = input.value 
if (tarea) {
    agregarTarea(tarea,false,false,id);
    LIST.push({
        id: id,
        check: false,
        tarea: tarea,
        eliminado: false
    });
    localStorage.setItem("GUARDADO", JSON.stringify(LIST));
    id++;
}
input.value = "";
    }
}

)

lista.addEventListener('click', function (event){
    const element = event.target;
    const elementData = element.attributes.data.value;
    if (elementData == 'check'){
        tareaRealizada (element)
    }

    else if (elementData =='borrar'){
        tareaEliminada (element)
    }
    localStorage.setItem("GUARDADO", JSON.stringify(LIST));

}
);

let data = localStorage.getItem("GUARDADO")
if (data){
    LIST = JSON.parse(data);
    console.log(LIST);
    id = LIST.length
    cargarLista(LIST)
}else{
    LIST = [];
    id = 0;
}

function cargarLista(array){
    array.forEach(function(item){
        agregarTarea(item.tarea,item.check,item.eliminado,item.id);
    })
}