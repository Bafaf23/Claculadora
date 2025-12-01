/* La tercera calculadora debe ser creada utilizando manipulación
 * del DOM y programación orientada a eventos.
 * Esta calculadora debe implementar botones para cada número y
 * cada operación, similar a una calculadora física.
 * El usuario debe poder interactuar con la calculadora haciendo
 * clic en los botones para ingresar números y seleccionar
 * operaciones.
 * El resultado debe mostrarse en una pantalla dentro de la
 * misma página web.
 */

let pantalla = document.getElementById("consola");
let btn3 = document.querySelector("#cal2 .grid").querySelectorAll("button");

let display = "0";
let operando1 = null;
let operador = null;
let esperandoOperador = false;

function actualizarDisplay() {
  pantalla.textContent = display;
}

function calculo(op1, operador, op2) {
  const number1 = parseFloat(op1);
  const number2 = parseFloat(op2);
  if (operador == "+") return number1 + number2;
  if (operador == "-") return number1 - number2;
  if (operador == "*") return number1 * number2;
  if (operador == "/") {
    if (number2 == 0) {
      return NaN;
    }
    return number1 / number2;
  }
  if (operador == "%") return number1 / 100;
}

btn3.forEach((boton) => {
  boton.addEventListener("click", () => {
    let valor = boton.getAttribute("value");
    if (!isNaN(valor) && valor !== null) {
      if (display == "0" || esperandoOperador) {
        display = valor;
        esperandoOperador = false;
      } else {
        display += valor;
      }
      actualizarDisplay();
    }

    if (isNaN(valor) || valor == null) {
      switch (valor) {
        case "+":
        case "-":
        case "*":
        case "%":
        case "/":
          if (operando1 !== null && !esperandoOperador) {
            display = String(calculo(operando1, operador, display));
          }
          operando1 = display;
          operador = valor;
          esperandoOperador = true;
          break;

        case "=":
          if (operador !== null && operando1 !== null) {
            let resultado = calculo(operando1, operador, display);
            if (Number.isNaN(resultado)) {
              display = "No se puede divir con 0";
            } else {
              display = String(resultado);
            }
            operador = null;
            operando1 = null;
            esperandoOperador = false;
          }
          break;
        case "ac":
          display = "0";
          operando1 = null;
          operador = null;
          esperandoOperador = false;
          break;
        case "eliminar":
          display = display.slice(0, -1);
          if (display == "") {
            display = "0";
          }
          break;
        case "n":
          display = "Hola, mundo!";
          break;
        case ".":
          if (!display.includes(".")) {
            display += ".";
          }
      }
    }
    actualizarDisplay();
  });
});
