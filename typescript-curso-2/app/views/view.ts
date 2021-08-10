export abstract class View<T>{
    protected elemento : HTMLElement; // quem é filho tem acesso;

    constructor(selector : string){
        this.elemento = document.querySelector(selector);
    }

    
    update(model : T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    };

    abstract template(model : T) : string;
}