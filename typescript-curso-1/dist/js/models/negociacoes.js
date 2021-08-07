export class Negociacoes {
    constructor() {
        this.negociacoes = []; // == private negociacoes : Negociacao[] = []; 
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    ;
    lista() {
        return this.negociacoes;
        //return [...this.negociacoes]; // spread operator == pega cada item da lista e copia para um outra lista, protegendo o dado original; 
    }
    ;
}
