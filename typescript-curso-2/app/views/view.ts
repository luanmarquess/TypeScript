export abstract class View<T>{
    protected elemento : HTMLElement; // quem é filho tem acesso;
    private escapar : boolean = false;
    
    constructor(selector : string, escapar?: boolean){ // ? parametro opicional
        const elemento = document.querySelector(selector);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        }else{
            throw Error('Selector ${selector} não existe.')
        }
        if(escapar){
            this.escapar = escapar;
        }

    }

    
    public update(model : T): void {
        let template = this.template(model);
        if(this.escapar){
            template = template
            .replace(/<script>[\s\S]*?<\/script>/, '');
        };
        this.elemento.innerHTML = template;
    };

    protected abstract template(model : T) : string;
}