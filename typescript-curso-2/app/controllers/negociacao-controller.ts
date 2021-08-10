import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegocicoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputValor : HTMLInputElement;
    private negociacoes = new Negociacoes;
    private negociacoesView = new NegocicoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor (){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);

    }

    adiciona() : void{
        const negociacao = this.criaNegociacao(); 
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com Sucesso!')
        this.limparFormulario();

    }

    criaNegociacao() : Negociacao{
        const exp = /-/g; // regex para pegar todos os ifens
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);


        /*
        const negociacao = new Negociacao(
            this.inputData.valueAsDate,
            this.inputQuantidade.valueAsNumber,
            this.inputValor.valueAsNumber
        );
        */
    }

    limparFormulario() : void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();

    }
}