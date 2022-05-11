<?php 
    /* The email address where the email will be sent. */
    $destinatario = 'contact.fernandojz@gmail.com';
     
    /* Getting the values from the form. */
    $correoIns = $_POST['correoIns'];
    $idempleado = $_POST['idempleado'];
    $nombre = $_POST['nombre'];
    $apellidoPat = $_POST['apellidoPat'];
    $apellidoMat = $_POST['apellidoMat'];
    $instituto = $_POST['institut'];
    $date = $_POST['date'];
    /* Trying to assign the value of the JavaScript variable `r` to the PHP variable ``. */
    $var_PHP = "<script> document.writeln(r); </script>"; // igualar el valor de la variable JavaScript a PHP 

    //header del correo
    $header = "Enviado desde DISA UAEH";

    /* Concatenating the variables. */
    $mensajeEntero = $idempleado . "\nAtentamente: " . $nombre;

   /* Sending the email. */
    mail($destinatario, $idempleado, $date, $mensajeEntero, $header );
   /* Showing a message to the user. */
    echo "<script>alert('Correo enviado exitosamente')</script>";
   /* Redirecting the user to the index.html page after 1 second. */
    echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
     /* Showing the result of the JavaScript variable `r` in the PHP file. */
     echo $var_PHP   
   
       

  

  




?>