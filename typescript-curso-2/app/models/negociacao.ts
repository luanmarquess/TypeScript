export class Negociacao{

    constructor(private _data: Date, public readonly quantidade: number, public readonly valor: number){};

    get data() : Date{
        const data = new Date(this._data.getTime()); // passa a copia da data
        return this._data;
    }
/*
    get quantidade() : number{
        return this._quantidade;
    }

    get valor() : number{
        return this._valor;
    } 
*/
    get volume() : number{
        return this.quantidade * this.valor;
    }

    public static criaDe(dataString : string, quantidadeString: string, volumeString: string) : Negociacao{
        const exp = /-/g; // regex para pegar todos os ifens
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(volumeString);

        return new Negociacao(date, quantidade, valor);
    }
}
