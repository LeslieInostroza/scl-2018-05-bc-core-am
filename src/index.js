/* Acá va tu código */
window.onload = function(){
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  let texto = document.getElementById("texto");
  let texto2 = document.getElementById("texto2");

    // ---> ()=> es una funcion <----
  button1.addEventListener('click', () =>{
     let cifrar = document.getElementById('input_cifrar').value.toUpperCase();
     let cart = document.getElementById("caracter");
     texto.innerHTML = "su resultado descifrado es: " + cifrar;
     let ciph = window.cipher.encode(cart, cifrar);
    });
  button2.addEventListener('click', () =>{
  let descifrar=document.getElementById('input_descifrar').value.toUpperCase();let cartDos = document.getElementById("caracterDos");
  texto2.innerHTML = "su resultado cifrado es: " + descifrar;
  let diceph = window.cipher.decode(cartDos, descifrar);
    });

} 
