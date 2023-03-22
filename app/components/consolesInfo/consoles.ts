export enum appConsoles {
    "ctitle" = "ctitle",
    "cimage" = "cimage",
    "ctext" = "ctext",
    "button" = "button",
}

class Consoles extends HTMLElement {

    ctitle?: string;
    cimage?: string;
    ctext?: string;
    button?: string;

    static get observedAttributes(){
        
        const appC: Record<appConsoles, null> = {
            ctitle: null,
            cimage: null,
            ctext: null,
            button: null,
        }
        return Object.keys(appC)
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    attributeChangedCallback(propName: appConsoles, _:string, newValue: string){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="../app/components/gameShop/gameShop.css">
        <section class="gsS">
            <section class="gameshop-section">
                <link rel="stylesheet" href="../app/components/banner/banner.css">
                <h1>${this.ctitle}</h1>
                <div class="consoles-image" style='background-image: url("${this.cimage}");'></div>
                <div class="gs-content">
                    <span>
                        <h3>${this.ctext}</h3>
                        <button class="call-to-act">${this.button}</button>
                    </span>
                </div>
            </section>
        </section>        
        <hr>
        `
    }
}

customElements.define("app-consoles", Consoles);
export default Consoles