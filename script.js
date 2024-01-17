function esNumero(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
  }
  
  function obtenerNumero() {
    let numero;
    do {
      let input = prompt("Ingrese un número para la serie de Fibonacci:");
      if (esNumero(input)) {
        numero = parseInt(input);
      } else {
        console.log("Error: Por favor, ingrese un número válido.");
      }
    } while (!esNumero(numero));
  
    return numero;
  }
  
  function fibonacci(n) {
    let serie = [0, 1];
    for (let i = 2; i < n; i++) {
      serie[i] = serie[i - 1] + serie[i - 2];
    }
    return serie;
  }
  
  function imprimirResultado() {
    let numero = obtenerNumero();
    let resultado = fibonacci(numero);
    console.log(`Serie de Fibonacci para ${numero} números:`, resultado);
    let resultadoDOM = document.getElementById("resultado");
    resultadoDOM.innerHTML = `Serie de Fibonacci para ${numero} números: ${resultado.join(", ")}`;
  }
  
  imprimirResultado();