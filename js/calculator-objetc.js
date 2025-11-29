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

    if (valor2 == 0) {
      return true;
    }
    const resultado = valor1 / valor2;
    return resultado;
  }
}

function operacion() {
  let input1 = parseFloat(document.getElementById("input1").value);
  let input2 = parseFloat(document.getElementById("input2").value);
  let selec = document.getElementById("select-operacion").value;
  let pantalla = document.getElementById("pantalla");

  let calculo = new Calculadora(input1, input2);

  if (selec == "+") {
    let resultado = calculo.suma();
    let mostar = document.createElement("div");
    let alerResultdo = document.getElementById("resultado");
    mostar.innerHTML = `<p id="resultado" class="font-bold text-xl">${resultado}</p>`;
    if (alerResultdo) alerResultdo.remove();
    pantalla.appendChild(mostar);
    return resultado;
  } else if (selec == "-") {
    let resultado = calculo.resta();
    let mostar = document.createElement("div");
    let alerResultdo = document.getElementById("resultado");
    mostar.innerHTML = `<p id="resultado" class="font-bold text-xl">${resultado}</p>`;
    if (alerResultdo) alerResultdo.remove();
    pantalla.appendChild(mostar);
    return resultado;
  } else if (selec == "*") {
    let resultado = calculo.multiplicacion();
    let mostar = document.createElement("div");
    let alerResultdo = document.getElementById("resultado");
    mostar.innerHTML = `<p id="resultado" class="font-bold text-xl">${resultado}</p>`;
    if (alerResultdo) alerResultdo.remove();
    pantalla.appendChild(mostar);
    return resultado;
  } else if (selec == "/") {
    let resultado = calculo.division();
    if (resultado == true) {
      let alerResultdo = document.getElementById("resultado");
      let mostar = document.createElement("div");
      mostar.innerHTML = `<p id="resultado" class="font-bold text-xl">No se puede dividir por 0, animal</p>`;
      if (alerResultdo) alerResultdo.remove();
      pantalla.appendChild(mostar);
      return resultado;
    }
    let mostar = document.createElement("div");
    let alerResultdo = document.getElementById("resultado");
    mostar.innerHTML = `<p id="resultado" class="font-bold text-xl">${resultado}</p>`;
    if (alerResultdo) alerResultdo.remove();
    pantalla.appendChild(mostar);
  }
}

let btn = document.getElementById("btn-2");

btn.addEventListener("click", () => {
  operacion();
});
