/* Acá va tu código */
window.onload = function(){
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const caracter = document.getElementById("caracter");
    let texto = document.getElementById("texto");
    let texto2 = document.getElementById("texto2");

    // ---> ()=> es una funcion <----
    button1.addEventListener('click', () =>{
     let cifrar = document.getElementById('input_cifrar').value;
          texto.innerHTML = "su resultado es: " + cifrar;
    });
    button2.addEventListener('click', () =>{
      let descifrar = document.getElementById('input_descifrar').value;
        texto2.innerHTML = "su resultado es: " + descifrar;
    });

} 
