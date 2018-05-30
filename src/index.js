/* Acá va tu código */
window.onload = function(){
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    button1.addEventListener('click', () =>{
     let cifrar = document.getElementById('cajacifrar').value;
          console.log(cifrar);
    });

    button2.addEventListener('click', () =>{
      let descifrar = document.getElementById('cajadescifrar').value;
          console.log(descifrar);
    });

} 
