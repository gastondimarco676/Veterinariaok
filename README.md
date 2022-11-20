# Veterinariaok
195 listo
lo que cambia es el app.js
que hay aca:
191
1-las const, hasta linea 10
2-EL
3-const citaObj
4-function datosCita(e)
+192
5-function nuevaCita
6-ui.imprimirAlerta--creacion del metodo en class UI y uso en nuevaCita:
"Todos los campos son obligatorios"
+193
1) agregarCita(cita) {
        this.citas = [...this.citas, cita]
2)formulario.reset y sobre todo, reiniciarObjeto donde correji un error
+194
metodo ui.imprimirCitas(administrarCitas)
-destructuring desde el parentesis
-citas.orEach
-divCita
-scripting de cada parte del divCita: mascotaParrafo y demas
-font-weight-bolder a cada span de cada item
-limpiarHTML al comienzo, antes de imprimir todo el array citas actual
+195
creacion del btnEliminar con su HTMl
btnEliminar.onclick = () => eliminarCita(id)
administrarCitas.eliminarCita(id){
        this.citas = this.citas.filter(cita=> cita.id !== id)*
*esta creado en clase Citas, administrarCitas es solo una instancia de la clase Citas
por ahora siempre uso una sola instancia, supongo que mas delante servira mas
