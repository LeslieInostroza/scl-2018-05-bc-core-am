# Proyecto Cifrado Cesar

Cifrado Cesar, es una aplicacion tipo traductor que utiliza un metodo de cifrado que sustituye una letra del texto original, reemplazandola por otra letra del abecedario, segun el numero de desplazamiento que el usuario desee, creando asi un mensaje en codigo, util para el usuario, que desee mandar mensajes con un lenguaje secreto.
La app Cifrado César, recibe su nombre en honor a Julio César, creador de este codigo, segun dice la hitoria lo usó con un desplazamiento de tres espacios para proteger sus mensajes mas importantes.

Aqui vemos el ejemplo, utilzado  y creado por Julio Cesar:

* Alfabeto sin cifrar: **A B C** D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado:    **D E F** G H I J K L M N O P Q R S T U V W X Y Z A B C

Aqui vemos que se desplazo **tres** espacios, siendo asi, la letra **D** corresponde a la letra **A**, la letra **E** corresponde a la letra **B**, la letra **F** corresponde a la letra **C** y asi sucesivamente.

Esta app permite al usuario, elegir el desplazamiento que mejor le acomode, con un rango **minimo de 1** y un **maximo de 100**.

## Funcionalidad del programa

_¿ Como funciona ?_

**¡Es muy sencillo!**
El usuario escribe un texto que necesite cifrar (transformar a codigo), elige la cantidad de espacios que se desplazara en el abecedario, (en un rango min. de 1 espacios y max. de 100 espacios), y apreta "enviar", esto le devolvera como resultado, un mensaje cifrado en codigo cesar **personalizado**, ademas tambien, podra descifrar un mensaje en codigo, 

La palabra escrita por el usario en la casilla "texto cifrar" __(let cifrar = document.getElementById("input_cifrar").value.toUpperCase();)__ , es tomada por el boton "enviar"



