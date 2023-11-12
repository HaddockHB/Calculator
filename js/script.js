function realizarOperacion(operador) {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let resultado;

    switch (operador) {
        case '+':
            resultado = number1 + number2;
            break;
        case '-':
            resultado = number1 - number2;
            break;
        case '*':
            resultado = number1 * number2;
            break;
        case '/':
            if (number2 !== 0) {
                resultado = number1 / number2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        case 'sqrt':
            if (number1 >= 0) {
                resultado = Math.sqrt(number1);
            } else {
                resultado = "Error: Raíz cuadrada de número negativo";
            }
            break;
        default:
            resultado = "Operador no válido";
    }

    document.getElementById('resultado').value = resultado;
}
