


window.cipher = {
  encode: (cart,cifrar) => {
    /* Acá va tu código */
    let result ="";
    for(let i = 0; i< cifrar.length; i++ ){
    let inc = cifrar.charCodeAt(i);
    let ecuacion = (inc-65 + cart)% 26 + 65;
    result += String.fromCharCode(ecuacion);
   console.log(result);
    }
    return result;
  },
  decode: (cartDos,descifrar) => {
    /* Acá va tu código */
    let resultdos="";
    for(let i = 0; i< descifrar.length; i++){
    let incg = descifrar.charCodeAt(i);
    let ecuaDos = (incg + 65 - cartDos)% 26 + 65;
    resultdos += String.fromCharCode(ecuaDos);
  }

  return resultados;
  }
}