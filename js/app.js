//campos de formu
const mascotaInput = document.getElementById('mascota')
const propietarioInput = document.getElementById('propietario')
const telefonoInput = document.getElementById('telefono')
const fechaInput = document.getElementById('fecha')
const horaInput = document.getElementById('hora')
const sintomasInput = document.getElementById('sintomas')

const formulario = document.getElementById('nueva-cita')
const contenedorCitas = document.getElementById('citas')

class Citas {
    constructor() {
        this.citas = []
    }
/*
    agregarCita(cita) {
        this.citas = [...this.citas, cita]

        //console.log(this.citas)
    }
    eliminarCita(id){
        this.citas = this.citas.filter(cita=> cita.id != id)
    }*/
}

class UI {
    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12')

        tipo === 'error' ?
            divMensaje.classList.add('alert-danger')
            :
            divMensaje.classList.add('alert-success')

        //mensaje de error
        divMensaje.textContent = mensaje

        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'/*'#col-md-6 agregar-cita'*/))

        setTimeout(() => {
            divMensaje.remove()
        }, 4000);
    }

/*
    imprimirCitas({ citas }) {

        //const {citas} = citas--otra forma de destructuring, mejor la de arriba


        this.limpiarHTML()

        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita
            const divCita = document.createElement('div')
            divCita.classList.add('cita', 'p-3')
            divCita.dataset.id = id

            //Scripting de los elementos de la cita

            const mascotaParrafo = document.createElement('h2')
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder')
            mascotaParrafo.textContent = mascota


            const propietarioParrafo = document.createElement('p')
            propietarioParrafo.innerHTML =
                `<span class="font-wight-bolder">Poprietario: </span> ${propietario}`

            const telefonoParrafo = document.createElement('p')
            telefonoParrafo.innerHTML =
                `<span class="font-wight-bolder">Celu: </span> ${telefono}`

            const fechaParrafo = document.createElement('p')
            fechaParrafo.innerHTML =
                `<span class="font-wight-bolder">Para: </span> ${fecha}`

            const horaParrafo = document.createElement('p')
            horaParrafo.innerHTML =
                `<span class="font-wight-bolder">Hora: </span> ${hora}`

            const sintomasParrafo = document.createElement('p')
            sintomasParrafo.innerHTML =
                `<span class="font-wight-bolder">Sintromas: </span> ${sintomas}`


            //ELIMICITA
            const btnEliminar = document.createElement('button')
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2',)
            btnEliminar.innerHTML =
                'Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            const eliminarCita = id => {
                //elimina la cita
                //contenedorCitas.removeChild(divCita)
                administrarCitas.eliminarCita(id)
                //mensaje
                ui.imprimirAlerta('la cita se ha eliminau', 'success')
                //reimprimir
                ui.imprimirCitas(administrarCitas)

                
            }

            
            //btnEliminar.addEventListener('click', eliminarCita)
            btnEliminar.onclick = () => eliminarCita(id)

            //EDITCITA
            const btnEditar = document.createElement('button')
            btnEditar.classList.add('btn', 'btn-info', 'mr-2',)
            btnEditar.innerHTML =
                'Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>'
        const editarCita = cita => {
                console.log(cita)
                const { mascota, propietario, telefono, fecha, hora, sintomas } = cita;
                mascotaInput.value = mascota,
                    propietarioInput.value = propietario,
                    telefonoInput.value = telefono,
                    fechaInput.value = fecha,
                    horaInput.value = hora,
                    sintomasInput.value = sintomas
            }
            
            btnEditar.onclick = () => editarCita(cita)

            divCita.appendChild(mascotaParrafo)
            divCita.appendChild(propietarioParrafo)
            divCita.appendChild(telefonoParrafo)
            divCita.appendChild(fechaParrafo)
            divCita.appendChild(horaParrafo)
            divCita.appendChild(sintomasParrafo)
            divCita.appendChild(btnEliminar)
            divCita.appendChild(btnEditar)
            contenedorCitas.appendChild(divCita)
        })

    }

    limpiarHTML() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }*/

}
const ui = new UI()
const administrarCitas = new Citas()

eventListeners()
function eventListeners() {
    mascotaInput.addEventListener('change', datosCita)
    propietarioInput.addEventListener('change', datosCita)
    telefonoInput.addEventListener('change', datosCita)
    fechaInput.addEventListener('change', datosCita)
    horaInput.addEventListener('change', datosCita)
    sintomasInput.addEventListener('change', datosCita)
    formulario.addEventListener('submit', nuevaCita)
}

//OBJETO CON INFO DE LA CITA
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',

}
//agrega datos al objeto de cita
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;

    console.log(citaObj)
}

function nuevaCita(e) {
    e.preventDefault();
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;
    //validar
    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos campos obli', 'error')
        return;
    }
    //:ui.imprimirAlerta('Cita agregada', 'success')
    /*citaObj.id = Date.now()

    // administrarCitas.agregarCita(citaObj)
    administrarCitas.agregarCita({ ...citaObj })
    reiniciarObjeto()
    formulario.reset()
    ui.imprimirCitas(administrarCitas)*/
}

/*function reiniciarObjeto() {

    const citaObj = {
        mascota: '',
        propietario: '',
        telefono: '',
        fecha: '',
        hora: '',
        sintomas: '',

    }
}

function editarCita (cita) {
    console.log(cita)
    const { mascota, propietario, telefono, fecha, hora, sintomas } = cita;
    mascotaInput.value = mascota,
        propietarioInput.value = propietario,
        telefonoInput.value = telefono,
        fechaInput.value = fecha,
        horaInput.value = hora,
        sintomasInput.value = sintomas
 }*/
