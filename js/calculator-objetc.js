/* La segunda calculadora debe ser creada utilizando programación
 * orientada a objetos (clases). Se recomienda obtener los
 * valores de los inputs desde un formulario HTML y mostrar
 * el resultado en el DOM. */
class Calculadora {
  constructor(input) {
    this.valor = input;
  }

  operation() {
    let operacion = this.valor;
    try {
      const resultado = math.evaluate(operacion);
      return resultado;
    } catch (error) {
      console.log(`Hubo un error en procesar ${operacion}` + error);
    }
  }
}

function mensaje(mensaje) {
  let pan = (document.getElementById("resultado").textContent = mensaje);
  /* mostar.innerHTML = `<p id="resultado" class="font-bold text-xl">${mensaje}</p>`;
  if (alerResultdo) alerResultdo.remove();
  pantalla.appendChild(mostar);*/
}

function operacion() {
  let input = document.getElementById("input2").value;

  let calculo = new Calculadora(input);
  let resultado = calculo.operation();

  return mensaje(resultado);
}

/* function operacion() {
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
} */

let btn = document.getElementById("btn-2");

btn.addEventListener("click", () => {
  operacion();
});
