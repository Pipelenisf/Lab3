export enum AppHeader  {
    "logo" = "logo",
    "search" = "search",
    "support" = "support",
    "wlist" = "wlist",
    "account" = "account",
}

class Header extends HTMLElement{

    logo?: string;
    search?: string;
    support?: string;
    wlist?: string;
    account?: string;

    static get observedAttributes(){
        
        const appH: Record<AppHeader, null> = {
            logo: null,
            search: null,
            support: null,
            wlist: null,
            account: null,
        }
        
        return Object.keys(appH)
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})

    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: AppHeader, _: string, newValue: string ){
                 this[propName] = newValue;
                 this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <header>
            <div style="background-image: url(${this.logo || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"}) ;"></div>
            <span>
                <div>${this.search || "funciona"}</div>
                <input></input> 
            </span>
            <p>${this.support || "funciona"}</p>
            <p>${this.wlist || "funciona"}</p>
            <p>${this.account || "funciona"}</p>
            </header>
            
            `
        }
    }
}

customElements.define("app-header", Header);
export default Header;
