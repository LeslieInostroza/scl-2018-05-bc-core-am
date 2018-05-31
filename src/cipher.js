window.cipher = {
  encode: (cifrar, cart) => {
    /* Acá va tu código */
    let result =""; // acá se concadenan mi texto ya cifrado
    for(let i = 0; i< cifrar.length; i++ ) {
     //let inc = cifrar.charCodeAt(i); 
     let ecuacion = ((cifrar.charCodeAt(i) - 65 + parseInt(cart)) % 26 + 65); 
     result += String.fromCharCode(ecuacion);
     console.log(result);
    }
    return result;
  },
  decode: (descifrar, cartDos) => {
    /* Acá va tu código */
    let resultdos=""; // acá se concadenan mi texto ya descifrado
    for(let i = 0; i< descifrar.length; i++) {
     //let incg = descifrar.charCodeAt(i);
     let ecuaDos = ((descifrar.charCodeAt(i) + 65 - parseInt(cartDos)) % 26 + 65);
     resultdos += String.fromCharCode(ecuaDos);
  }
  return resultdos;
  }
}