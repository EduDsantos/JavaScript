function clicar() {
    var nuns = document.getElementById('txtn');
    var res = document.getElementById('res');

    if (nuns.value == 0 || nuns.value < 0 || nuns.value > 100) {
        window.alert('ERRO! Insira um numero!');
    } else {
        let ar = [Number(nuns.value)];

        // Encontrar o valor máximo da array
        let max = Math.max(...ar);

        // Encontrar a soma de todos os valores na array
        let sum = 0;
        for (let i = 0; i < ar.length; i++) {
            sum += ar[i];
        }

        // Encontrar a média dos valores na array
        let avg = sum / ar.length;

        res.innerHTML = 'Valor máximo: ' + max + '<br>' + 'Soma: ' + sum + '<br>' + 'Média: ' + avg;
    }
}
