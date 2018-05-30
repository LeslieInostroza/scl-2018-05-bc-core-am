/* Acá va tu código */
window.onload = function(){
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    // ---> ()=> es una funcion <----
    button1.addEventListener('click', () =>{
     let cifrar = document.getElementById('cajacifrar').value;
         cajadescifrar.value = cifrar;
    });

    button2.addEventListener('click', () =>{
      let descifrar = document.getElementById('cajadescifrar').value;
          cajacifrar.value = descifrar;
    });

} 
