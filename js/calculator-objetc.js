/* La segunda calculadora debe ser creada utilizando programación
 * orientada a objetos (clases). Se recomienda obtener los
 * valores de los inputs desde un formulario HTML y mostrar
 * el resultado en el DOM. */

class Calculadora {
  constructor(input1, input2) {
    this.valor1 = input1;
    this.valor2 = input2;
  }

  suma() {
    let valor1 = this.valor1;
    let valor2 = this.valor2;

    const resultado = valor1 + valor2;
    return resultado;
  }

  resta() {
    let valor1 = this.valor1;
    let valor2 = this.valor2;

    const resultado = valor1 - valor2;
    return resultado;
  }

  multiplicacion() {
    let valor1 = this.valor1;
    let valor2 = this.valor2;

    const resultado = valor1 * valor2;
    return resultado;
  }

  division() {
    let valor1 = this.valor1;
    let valor2 = this.valor2;
    if (valor2 === 0) {
      return;
    } else {
      const resultado = valor1 / valor2;
      return resultado;
    }
  }
}

function mensaje(mensaje) {
  return (document.getElementById("resultado").textContent = mensaje);
  /* mostar.innerHTML = `<p id="resultado" class="font-bold text-xl">${mensaje}</p>`;
  if (alerResultdo) alerResultdo.remove();
  pantalla.appendChild(mostar); */
}

function operacion() {
  let input1 = parseFloat(document.getElementById("input1").value);
  let input2 = parseFloat(document.getElementById("input2").value);
  let selec = document.getElementById("select-operacion").value;

  let calculo = new Calculadora(input1, input2);

  if (isNaN(input1)) {
    let entrada = document.getElementById("input1");
    let error = `Asegurate de ingresar un numero`;
    entrada.style.borderColor = "red";
    return mensaje(error);
  } else {
    let entrada = document.getElementById("input1");
    entrada.style.borderColor = "black";
  }

  if (isNaN(input2)) {
    let entrada = document.getElementById("input2");
    let error = `Asegurate de ingresar un numero`;
    entrada.style.borderColor = "red";
    return mensaje(error);
  } else {
    let entrada = document.getElementById("input2");
    entrada.style.borderColor = "black";
  }

  if (selec == "+") {
    let resultado = calculo.suma();
    return mensaje(resultado.toFixed(3));
  } else if (selec == "-") {
    let resultado = calculo.resta();
    return mensaje(resultado.toFixed(3));
  } else if (selec == "*") {
    let resultado = calculo.multiplicacion();
    return mensaje(resultado.toFixed(3));
  } else if (selec == "/") {
    let resultado = calculo.division();
    if (resultado === undefined) {
      let error = "No se puede dividir entre 0, animal";
      return mensaje(error);
    }
    return mensaje(resultado.toFixed(4));
  }
}

let btn = document.getElementById("btn-2");

btn.addEventListener("click", () => {
  operacion();
});
