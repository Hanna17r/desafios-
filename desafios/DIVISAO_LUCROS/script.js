function calcular() {
    var num1 = parseFloat(document.getElementById('lucro').value);
    var num2 = parseFloat(document.getElementById('socios').value);

    if (isNaN(lucro) || isNaN(socios)) {
        alert('Favor inserir numeros validos');
        return;
    }
    //calcular a soma

    var resultado = num1 + num2;

    //exibir resultado
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}