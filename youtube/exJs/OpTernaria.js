//Operaçoes ternárias



/*
JEITO NORMAL DE FAZER:

if(pontuaçaoUsuario >= 1000){
    console.log('Usuario vip')
}else{
    console.log('usuario normal')
}
*/

//OPERAÇAO TERNARIA
const pontuaçao = 900;
const usuarioP = pontuaçao >= 1000 ? 'Usuario vip' : 'Usuario normal';

const corUsuario = 'azul';
const corPadrao = corUsuario || 'preto' // msm sistema usando OR
console.log(usuarioP, corPadrao)