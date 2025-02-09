class Avo {
    constructor(sobrenome='silvestre'){
        this.sobrenome = sobrenome
    }
}
const avo = new Avo

class Pai extends Avo{
    constructor(sobrenome, profissao ='Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Santos')
    }
}

const filho = new Filho
console.log(filho)
console.log(avo)