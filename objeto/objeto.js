const objeto = {
    nome: 'eduardo',
    sobrenome: 'santos',
    idade: 19,
    fala() {
        console.log(`A idade é ${this.idade}`);
        console.log(`O nome é ${this.nome}`);
        console.log(`E o sobrenome é ${this.sobrenome}`);
    },
       
    incrementoIdade(){
        this.idade++
    }
    
};


objeto.incrementoIdade();
objeto.fala();

