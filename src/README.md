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
El usuario escribe un texto que necesite cifrar (transformar a codigo), elige la cantidad de espacios que se desplazara en el abecedario, desplazandose de derecha a izquierda (rango a desplazar min. de 1 espacios y max. de 100 espacios), y preciona "enviar", esto le devolvera como resultado, un mensaje cifrado en codigo cesar **personalizado**.

**Ejemplo:** utilizaremos una cantidad de espacio a desplazar de "5": nuestro mensaje es: "HOLA"

* Alfabeto sin cifrar: **A** B C D E F G **H** I J K **L** M N **O** P Q R S T U V W X Y Z
* Alfabeto cifrado:    **F** G H I J K L **M** N O P **Q** R S **T** U V W X Y Z A B C D E (desplazado 5 espacios)

* MENSAJE sin cifrar: **H O L A** 
* MENSAJE CIFRADO:    **M T Q F**


como resultado la letra *M* corresponde a la letra **H**, la letra *T* corresponde a la letra **O**, la letra *Q* corresponde a la letra **L** y la letra *F*, corresponde a la letra **A**.

El usuario, ademas, podra descifrar un mensaje que este en codigo cesar (cifrado), aplicando la misma logica, escribe el texto que necesite descifrar (que esta en codigo), elige la cantidad de espacios que se desplazara en el abecedario, esta vez, desplazandose de izquierda a derecha, y preciona "Enviar", devolviendole como resultado, el mensaje descifrado.

**Ejemplo:** utilizaremos una cantidad de espacio a desplazar de "5": nuestro mensaje es: "CHAO"

* Alfabeto sin cifrar: **A** B **C** D E F G **H** I J K L M N **O** P Q R S T U V W X Y Z
* Alfabeto cifrado:    **F** G **H** I J K L **M** N O P Q R S **T** U V W X Y Z A B C D E (desplazado 5 espacios)

* MENSAJE sin cifrar: **C H A O** 
* MENSAJE CIFRADO:    **H M F T**


como resultado la letra *H* corresponde a la letra **C**, la letra *M* corresponde a la letra **H**, la letra *F* corresponde a la letra **A** y la letra *T*, corresponde a la letra **O**.

_¿ Como logramos esto ?_

Lo logramos gracias al codigo ACII, este codigo, es una representación numérica de un carácter como "A", siendo __"A"__, igual a __"65"__, __"B"__, igual a __"66"__ y asi sucesivamente.
Como sabras, las computadoras entienden solamente numeros, y por eso fue creado el codigo ACII, como una forma de comunicacion para los aparatos tecnologicos, como tu celular o tablet.

Por ende, lo que hace nuestra app en un lenguaje mas tecnico, es tomar el texto escrito por el usuario, en la casilla "texto cifrar", transformarla en codigo ASCII, mediante un metedo llamado **charCodeAt**, una vez obtenido mi codigo ASCII, gracias a charCodeAt, lo transformo nuevamente en un caracter alfabetico, utilizando el metedo llamado **String.fromCharCode**, obviamente entre estos dos metodos, hay una ecuacion matematica, cuyo objetivo es restar y/o sumar los espacios de desplazamiento elegido por el usuario.

Ejmeplo:
ecuacion = ((**texto_escrito_por_el_usuario**_.charCodeAt()_ - 65 + (n° desplazamieno)) % 26 + 65);
resultado = String.fromCharCode(ecuacion);

 * **texto_escrito_por_el_usuario**_.charCodeAt(i)_ = me transformar el texto escrito a codigo ASCII
 * __- 65__ = a mi texto transformado a codigo ASCII, le resta "65", (65 es el inicio de mi codigo ascii)
 * __+(n° desplazamiento)__ = a la resta anterior, se le suma el numero que se desplazara elegido por el usuario
 * __% 26__ = al resultado de la suma se le saca el residuo de 26, ya que nuestro alfabeto tiene 26 letras.
 * __+ 65__ = al resultado del residuo 26, se le suma 65, dandonos como resultado un nuevo codigo en numeros.

Para transformar nuestro nuevo codigo de la formula a caracteres alfabeticos, utilizamos **String.fromCharCode**, asi:
__= String.fromCharCode(ecuacion);__ = este metedo transforma el resultado de la ecuacion en caracteres alfabeticos, dandonos nuestro codigo cesar personalizado.

## Intrucciones de uso

_¿ Como se utiliza la app ?_

! Es muy facil !
Los pasos a seguir por el usuario son:
* Abrir la carpeta __"scl-2018-05-bc-core-am__
* Abrir la carpeta __"src"__
* Hacer doble click en el archico __index__ con logo de navegador, aqui se abrira la app en su navegador

Una vez en la app, los pasos son:
* Debe indicar los espacios a utilizar en su mensaje a cifrar y/o descifrar, donde dice: __Indique los espacios a utilizar en su   mensaje a cifrar:__ / __Indique los espacios a utilizar en su mensaje a descifrar:__
* Debe escribir el texto, en la casilla:  __"Ingrese su texto a cifrar:"__ y/o __"Ingrese su texto a descifrar:"__
* Una vez hecho los dos puntos anteriores, presione **Enviar**
* Apareceran los resultado debajo de cada cuadro de texto correspondiente.

## Diseño de la app

Lo diseñe, de una forma sencilla para que fuese facil de utilizar por el usuario, agradable a la vista, de esta forma lograr, que el usuario no sienta confundido al ver la app por primera vez.

Utilice tonalidades cafes, para darle sobriedad y calides, letras medianas a grandes, para que se notara, tanto los titulos, como el texto escrito y el resultado, diseñe dos secciones, donde en una se pueda cifrar y en la otra descifrar, de esta forma el usuario, sabe donde colocar el mensaje que necesita cifra y/o descifrar,mostrando el resultado debajo del texto donde ha escrito.

Utilice position relative, para poscinar, tanto las secciones, como los botones y los input, asi dejarlos en una poscision centrada y agradable a la vista.



