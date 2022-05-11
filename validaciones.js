

/* The above code is getting the values from the input fields. */
const  nombre = document.getElementById("name")
const  email = document.getElementById("correoIns")
const  empleado = document.getElementById("idempleado")
const form = document.getElementById("form");
const parrafo =document.getElementById("warnings")
const inputs =document.querySelectorAll('#form input')


/* A regular expression that is used to validate the input of the user. */
const expresiones = {
  neim : /^[a-zA-Z.\s \u00E0-\u00FC ]+$/ ,
  neimdos : /^[a-zA-ZÀ-ÿ.\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 \s]+$/,
  idval : /^\d{2,14}$/ //digitos
}

 
/*
function validarForm(e) {
  switch (e.target.name) {

    case "name":

      if (expresiones.nombreval.test(e.target.value))
      {
        document.getElementById("name").classList.add('form__input')
        document.getElementById("name").classList.remove('form__input')
      }else{
        document.getElementById("name", alert("nombre incorrecto"))
      }
        break;

    case "idempleado":
      if(expresiones.idval.test(e.target.value))
        break;
  };
}
*/
/*
inputs.forEach((input) => {
  input.addEventListener('keyup', validarForm);
  input.addEventListener('blur', validarForm);
})
*/

/* A function that is executed when the user clicks on the submit button. */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";

  let regexEmail = /^([a-z0-9_\.-]+)@uaeh\.edu\.mx$/;
  let bandera = true;

  /* validate with regular expretions */
  if (expresiones.neimdos.test(nombre.value)) {
  } else {
    alert("el nombre solo debe contener letras");
    bandera = false;
  }

  /* Validating the input of the name lenght user. */
  if (nombre.value.length < 3) {
    warnings += "El nombre no es valido <br>";
    alert("Nombre muy corto");
    bandera = false;
  }

  /* Validating the input of the email user. */
  console.log(regexEmail.test(email.value));
  if (regexEmail.test(email.value)) {
  } else {
    alert("Ingresa con tu correo Institucional");
    bandera = false;
  }

  /*
    if(empleado.value.length == 0 || empleado.value != expresiones.idval){
        alert("Ingresa tu numero de empleado de manera correcta")
        bandera =false;
    } */

  /* Validating the input of the user. */
  if (expresiones.idval.test(empleado.value)) {
  } else {
    alert("Ingresa tu numero de empleado de manera correcta");
    bandera = false;
  }

  /* A conditional statement that is executed when the user clicks on the submit button. */
  if (bandera == false) {
    alert("Debes escribir el contenido correcto en los campos solicitados.");
    return bandera;
  } else {
    alert(
      "El formulario ha sido enviado, por favor revisa tu correo electronico para obtener tu usuario y contraseña"
    );
    //alert(makeid(26));
    /* Generating a random password. */
    var r = (Math.random() + 1).toString(36).substring(4);
    /* Printing the value of the input field with the id "idempleado" */
    console.log("Usuario:", empleado.value);
    /* Printing the value of the variable r. */
    console.log("Contraseña:", r);

  }

  
  /* Reseting the form. */
  form.reset();
});








            
/*
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
*/
