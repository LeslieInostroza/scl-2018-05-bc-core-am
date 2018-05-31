window.cipher = {
  encode: (cart,cifrar) => {
    /* Acá va tu código */
    let result ="";
    for(let i = 0; i< cifrar.lenght; i++ ); // 
    let inc = cifrar.charCodeAt(i);
    let ecuacion = (inc-65 + cart)% 26 + 65;
    result += String.fromCharCode(ecuacion);

    
  },
  decode: (cartDos,descifrar) => {
    /* Acá va tu código */
    let resultdos="";
    for(let i = 0; i< descifrar.lenght; i++);
    let incg = descifrar.charCodeAt(i);
    let ecuaDos = (incg + 65 - cartDos)% 26 -65;
    result += String.fromCharCode(ecuaDos);
  }
}