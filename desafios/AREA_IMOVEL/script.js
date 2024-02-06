function calcular() {
    var largura = parseFloat(document.getElementById('largura').value);
    var cumprimento = parseFloat(document.getElementById('cumprimento').value);

    if (isNaN(largura) || isNaN(cumprimento)) {
        alert('Favor inserir numeros validos');
        return;
    }
    //calcular a soma

    var resultado = largura * cumprimento;

    //exibir resultado
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}