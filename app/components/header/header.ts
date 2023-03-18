export enum AppHeader  {
    "logo" = "logo",
    "search" = "search",
    "select" = "select",
    "support" = "support",
    "wlist" = "wlist",
    "account" = "account",
}

class Header extends HTMLElement{

    logo?: string;
    search?: string;
    support?: string;
    select?: string;
    wlist?: string;
    account?: string;

    static get observedAttributes(){
        
        const appH: Record<AppHeader, null> = {
            logo: null,
            search: null,
            support: null,
            select: null,
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
            <link rel="stylesheet" href="../app/components/header/header.css">
            <header>
            <section class="menu">
                <div class="h-left-section">
                    <section class="logo-section">
                        <div style="background-image: url(${this.logo || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"});" class="logo"></div>
                    </section>
                    <span class="searcher-input">
                        <div class="icon" style="background-image: url(${this.search || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"});"></div>
                        <input placeholder="Busca juegos, equipos, noticias y más">
                            <div class="select"> <p>Todas las cat...</p></div>
                        </input> 
                    </span>
                </div>

                <div class="h-right-section">
                    <button>
                        <span>
                            <div class="icon" style="background-image: url(${this.support || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"});"></div>
                            <p>Support</p>
                        </span>
                    </button>
                    <button>
                        <span>
                            <div class="icon" style="background-image: url(${this.wlist || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"});"></div>
                            <p>Lista de deseos</p>
                        </span>
                    </button>
                    <button>
                        <span>
                            <div class="icon" style="background-image: url(${this.account || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"});"></div>
                            <p>Iniciar sesión / Registrate</p>
                        </span>
                    </button>
                </div>
            </section>


            <section>
            
            </section>
            </header>
            
            `
        }
    }
}

customElements.define("app-header", Header);
export default Header;

