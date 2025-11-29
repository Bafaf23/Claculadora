/**
 * Crear un sitio web que muestre 3 calculadoras de acuerdo a
 * los siguientes lineamientos:
 * - Las 3 calculadoras deben ser iguales en funcionalidad, esto
 * es, las 3 deben permitir realizar operaciones básicas como
 * suma, resta, multiplicación y división.
 * - Cada calculadora debe poseer su propio archivo HTML y JS.
 *
 * -La primera de las calculadoras debe ser creada utilizando
 * programación funcional (funciones). Se recomienda obtener
 * los valores de los inputs desde un prompt() y mostrar el
 * resultado en un alert().
 **/

function suma(a, b) {
  let suma = a + b;
  return suma;
}

function resta(a, b) {
  let resta = a - b;
  return resta;
}

function división(a, b) {
  let división = a / b;
  if (b == 0) {
    return alert("no se puede dividir por cero, te falla");
  }
  return división;
}

function multiplicación(a, b) {
  let multiplicación = a * b;
  return multiplicación;
}

function pendas(c) {
  let pendass = eval(c);
  if (c == "#") {
    return alert("te falla?");
  } else if (c == "") {
    return alert("te falla?");
  }
  return pendass;
}

function iniciarCalculadora() {
  let operador;

  do {
    operador = prompt(
      `Que quieres hacer:\n` +
        `(1) Sumar\n` +
        `(2) Restar\n` +
        `(3) Multiplicar\n` +
        `(4) Dividir\n` +
        `(p) Operaciones combindas\n` +
        `(5) Salir`
    );

    if (operador == "5") {
      alert("Chao");
      break;
    }

    if (operador >= "1" && operador <= "4") {
      const valor1 = parseFloat(prompt("dame un numero"));
      const valor2 = parseFloat(prompt("dame otro numero"));

      let resultado;

      switch (operador) {
        case "1":
          resultado = suma(valor1, valor2);
          alert(resultado);
          break;
        case "2":
          resultado = resta(valor1, valor2);
          alert(resultado);
          break;
        case "3":
          resultado = multiplicación(valor1, valor2);
          alert(resultado);
          break;
        case "4":
          resultado = división(valor1, valor2);
          alert(resultado);
          break;
        default:
          alert("ingrasa un opcion valida");
      }
    } else if (operador == "p") {
      let valor1 = prompt("dime la operacion:");

      let resultado = pendas(valor1);
      alert(resultado);
    } else {
      alert("ingresa un una opcion del 1 al 5");
    }
  } while (operador !== "5");
}
