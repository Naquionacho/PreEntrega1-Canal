function btcEnPesos (btc, btcPrice, tasaCambio) {
  return btcPrice * btc * tasaCambio; 
}

function pesoABtc (pesos, btcPrice, tasaCambio) {
  return (pesos / tasaCambio) / btcPrice;
}

function formatearDecimal (numero) {
  return numero.toLocaleString('es-AR', {minimunFractionDigits: 2 , maximumFractionDigits: 2 });
}

function calcular () {
  let btcPrice = 61000.00;
  let tasaCambio = 1355.00;
  let option = prompt(`Quieres saber: \n 1) ¿Cuantos pesos valen tus Bitcoins? \n 2) ¿Cuantos bitcoins compras con tus pesos? \n Ingrese 1 o 2 para continuar:`);
  if (option === '1'){
    let btc = parseFloat(prompt(`Ingrese la cantidad de btc que quiere calcular:`));
    if (isNaN(btc) || btc<= 0) {
      alert(`Por favor ingresá un número válido.`)
    } else {
      let pesos = btcEnPesos (btc, btcPrice, tasaCambio);
      alert(`Tus ${btc} BTC equivalen a $${formatearDecimal(pesos)}`);
      console.log(`Hola ${nombre}, tus ${btc} BTC equivalen a $${formatearDecimal(pesos)}`)
    }
  } else if (option === '2') {
      let pesos = parseFloat(prompt(`Ingrese la cantidad de pesos con los que quieres comprar Bitcoin:`));
      if (isNaN(pesos) || pesos <=0){
        alert(`Por favor ingrese un número válido.`)
      } else {
        let bitcoin = pesoABtc (pesos, btcPrice, tasaCambio);
        alert(`La cantidad de Bitcoins que puedes comprar con tus $${formatearDecimal(pesos)} es de ${bitcoin} BTC`); 
        console.log(`Hola ${nombre}, la cantiddad de Bitcoins que puedes comprar con tus $${formatearDecimal(pesos)} es de ${bitcoin} BTC.`);
      }
    } else {
      alert(`Opción no válida, por favor ingrese 1 o 2 para seguir avanzando.`);
    } 
  } 

let nombre = prompt(`Hola \n Bienvenido a esta calculadora informativa \n Diganos su nombre para continuar:`);
if (nombre == '' || nombre >= 0 || nombre <= 0 ) {
  alert(`Ingrese un nombre válido por favor.`)
} else {
  
  alert(`Bienvenido ${nombre}, a continución eligiras la opción que quieras y si sigues las reglas llegarás a tu resultado.`);
  calcular();
  
}



