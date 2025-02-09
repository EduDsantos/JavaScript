const form = document.querySelector('#form');

//funçao para selecionar os IDs e prevenir o reload da pagina
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputpeso = e.target.querySelector('#peso');
    const inputaltura = e.target.querySelector('#altura');
   
    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);
    console.log(peso, altura)

    if (!peso){
        setResultado('peso invalido', false); // ver se o peso ou altura é falso(!)
        return;
    }

    if(!altura){
        setResultado('altura invalida', false);
        return;
    }

    const imc = getImc(peso,altura)   //variavel do calculo do imc
    const nivelImc = getNivelImc(imc)

    const msg = `seu imc é ${imc} (${nivelImc})`

    setResultado(msg, true);
})

//funçao para checagem do nivl do imc
function getNivelImc(imc){
    const nivel = ['abaixo do peso','peso normal',' sobrepeso',
    'obesidade grau 1','obesidade grau2','obesidade grau3'];

    if(imc >= 38.9) return nivel[5]
    if(imc >= 34.9) return nivel[4]
    if(imc >= 29.9) return nivel[3]
    if(imc >= 24.9) return nivel[2]
    if(imc >= 18.5) return nivel[1]
    if(imc < 18.5) return nivel[0]
}

//funçao para calcular o imc
function getImc(peso,altura){
    const imc = peso / altura ** 2
    return imc.toFixed(2);
}


//funçao para printar o resultado na tela
function setResultado(msg, valid){
    const resultado = document.querySelector('#resu');
    resultado.innerHTML = '';
    const p = criaP();
    if(valid){
        p.classList.add('paragrafo');
    }else{
        p.classList.add('bad')
    }
    resultado.appendChild(p);
    p.innerHTML = msg;
}

//funçao para criar paragrafos
function criaP(){
    const p = document.createElement('p');
    return p;
}

