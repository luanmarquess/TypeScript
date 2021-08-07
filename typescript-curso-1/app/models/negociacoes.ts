import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes : Array<Negociacao> = [] // == private negociacoes : Negociacao[] = []; 

    adiciona(negociacao : Negociacao){
        this.negociacoes.push(negociacao);
    };

    lista() : ReadonlyArray<Negociacao>{        // == lista() : readonly Negociacao[]{}
        return this.negociacoes;
        //return [...this.negociacoes]; // spread operator == pega cada item da lista e copia para um outra lista, protegendo o dado original; 
    };
}
