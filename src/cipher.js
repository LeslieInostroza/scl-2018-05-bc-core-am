window.cipher = {
  encode: (cifrar, cart) => {
    /* Acá va tu código */
    let result =""; // acá se concadenan mi texto ya cifrado
    for(let i = 0; i< cifrar.length; i++ ) { // ciclo for, recorre la palabra escrita por el usuario
     //let inc = cifrar.charCodeAt(i); 
     //calcula cuantos espacios se movera,segun indica el usuario, tranforma string a codigo ascii,(a n°) ej:A=65
     let ecuacion = ((cifrar.charCodeAt(i) - 65 + parseInt(cart)) % 26 + 65);
     result += String.fromCharCode(ecuacion);//transforma el n° de la ecuacion en string
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