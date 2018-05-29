/* Acá va tu código */
window.onload = function(){
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");

    button1.addEventListener('click', function(){
     let cifrar = document.getElementById('cifrar').value;
     document.getElementById('descifrar').val(cifrar);
    });

    button2.addEventListener('click', function(){
      let descifrar = document.getElementById('descifrar').value;
      document.getElementById('cifrar').val(descifrar);
    });

} 
