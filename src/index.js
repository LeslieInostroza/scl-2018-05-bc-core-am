/* Acá va tu código */
window.onload = function(){
  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");
  let texto = document.getElementById("texto");
  let texto2 = document.getElementById("texto2");

    // ---> ()=> es una funcion <----
  button1.addEventListener('click', () =>{
  let cifrar = document.getElementById('input_cifrar').value.toUpperCase();
  console.log(cifrar);
  
  let cart = document.getElementById("caracter").value;
  console.log(cart);
  
  let ciph = window.cipher.encode(cifrar, cart);
  console.log(ciph);
  
  texto.innerHTML = `su resultado cifrado es: ${ciph}`;
  });


  button2.addEventListener('click', () =>{
  let descifrar=document.getElementById('input_descifrar').value.toUpperCase();
  console.log(descifrar);

  let cartDos = document.getElementById("caracterDos").value;
  console.log(cartDos);

  let diceph = window.cipher.decode(descifrar, cartDos);
  console.log(diceph);

  texto2.innerHTML = `su resultado descifrado es: ${diceph}`;
  
    });

} 
