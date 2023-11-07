//Valor ticket
const valorTicket = 200;
//Descuentos
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;

//Elementos en variables
let nombre              = document.getElementById("nombreCompra");
let divErrorNombre      = document.getElementById("mensajeErrorNombre");
let apellido            = document.getElementById("apellidoCompra");
let divErrorApellido    = document.getElementById("mensajeErrorApellido");
let mail                = document.getElementById("correoCompra");
let divErrorMail        = document.getElementById("mensajeErrorMail");
let cantidadTickets     = document.getElementById("cantidadTickets");
let categoria           = document.getElementById("categoria");

// Funcion para quitar el estilo de error a los elementos del form
const quitarClaseError = () => {

    let listaNodos = document.querySelectorAll (".form-control, .form-select");
    for (let index = 0; index < listaNodos.length; index++) {
        listaNodos[index].classList.remove('is-invalid'); 
    }
    let listaNodosDiv = document.querySelectorAll(".displayBlockOn");
    for (let index = 0; index < listaNodosDiv.length; index++) {
        listaNodosDiv[index].classList.remove('.displayBlockOn'); 
    }
}

// Calculo total a pagar
const totalAPagar = () => {
    //Ejecuto funcion para que quite todos los estilos de error en los campos que lo tengan
    quitarClaseError();

    //Verifico si lleno los siguientes campos, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (nombre.value === '') {
        alert("Por favor, escribí tu nombre.");
        nombre.classList.add("is-invalid");
        divErrorNombre.classList.add(".displayBlockOn"); // lo que hace esta clase es poner un div en display:block, ya que tiene la clase class="invalid-feedback"
        nombre.focus();
        return;
    }
    if (apellido.value === "") {
        alert("Por favor, escribí tu apellido.");
        apellido.classList.add("is-invalid");
        divErrorApellido.classList.add("mensajeErrorApellido"); // lo que hace esta clase es poner un div en display:block, ya que tiene la clase class="invalid-feedback"
        nombre.focus();
        return;
    }
    //Para determinar
    const mailValido = mail => {
        return  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }

    if (!mailValido()) {
        alert("Por favor, escribí tu correo.");
        apellido.classList.add("is-invalid");
        divErrorMail.classList.add("mensajeErrorMail"); // lo que hace esta clase es poner un div en display:block, ya que tiene la clase class="invalid-feedback"
        nombre.focus();
        return;
    }

    //Verifico si está ingresando al menos 1 ticket, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if ( (cantidadTickets.value == 0) || (isNaN(cantidadTickets.value))) {
        alert("Por favor, ingresá correctamente cantidad de tickets.");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }

    //Verifico que haya seleccionado una categoria, sino que aplique un estilo de error, haga foco en el campo y se detenga
    if (categoria.value == "") {
        alert("Por favor, seleccione una categoría.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    // Multiplico cantidad de tickets por el valor
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    // ralizo un switch con categoria.value - Aplico descuentos según categoría
    switch (categoria.value){
        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case "2":
            totalValorTickets = totalValorTickets - (descuentoTrainee/ 100 * totalValorTickets);
            break;
        case "3":
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;
    }
    // Inserto el valor en el HTML
    total.innerHTML = totalValorTickets;
}

// Boton Resumen recibe un escuchador y la funcion del calcula
btnResumen.addEventListener ('click', totalAPagar);

//Funcion para el boton Borrar para que borre el valor
const resetTotalAPagar = () => {
    quitarClaseError();
    total.innerHTML = "";
}
btnBorrar.addEventListener('click', resetTotalAPagar);





