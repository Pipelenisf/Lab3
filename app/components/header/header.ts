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

                        <svg viewBox="0 0 97 24" width="69" size="69" color="white">
                        <path class="logo" d="${this.logo || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"}" fill="currentColor"></path>
                        </svg>
                    </section>
                    <span class="searcher-input c-transition">
                        <svg class="svg-icon" viewBox="0 0 32 32" width="18" size="18">
                            <path class="icon" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="${this.search || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"}"></path>
                        </svg>
                        <input class="c-transition" placeholder="Busca juegos, equipo, noticias y más">
                            <div class="select"> <p>Todas las cat...</p></div>
                        </input> 
                    </span>
                </div>

                <div class="h-right-section">
                    <button>
                        <span class="c-transition">
                            <svg class="secondary-icon" viewBox="0 0 32 32" width="18" size="18">
                                <path d="${this.support || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"}" fill="currentColor" fill-rule="evenodd"></path>
                            </svg>
                            <p class="links">Soporte</p>
                        </span>
                    </button>
                    <button>
                        <span class="c-transition">
                            <svg class="secondary-icon" viewBox="0 0 32 32" width="18" size="18">
                                <path d="${this.wlist || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"}" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path>
                            </svg>
                            <p class="links">Lista de deseos</p>
                        </span>
                    </button>
                    <button>
                        <span class="c-transition">
                            <svg class="secondary-icon" viewBox="0 0 32 32" width="18" size="18">
                                <path d="${this.account || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"}" fill="currentColor"></path>
                            </svg>
                            <p class="links">Iniciar sesión / Regístrate</p>
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

