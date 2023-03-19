export var AppHeader;
(function (AppHeader) {
    AppHeader["logo"] = "logo";
    AppHeader["search"] = "search";
    AppHeader["select"] = "select";
    AppHeader["support"] = "support";
    AppHeader["wlist"] = "wlist";
    AppHeader["account"] = "account";
})(AppHeader || (AppHeader = {}));
class Header extends HTMLElement {
    static get observedAttributes() {
        const appH = {
            logo: null,
            search: null,
            support: null,
            select: null,
            wlist: null,
            account: null,
        };
        return Object.keys(appH);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../app/components/header/header.css">
            <header>
            <section class="menu">
                <div class="h-left-section">
                    <section class="logo-section">

                        <svg viewBox="0 0 97 24" xmlns="http://www.w3.org/2000/svg" width="69" role="presentation" alt="" data-testid="NintendoRacetrackLogoIcon" size="69" color="white">
                        <path class="logo" d="${this.logo || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"}" fill="currentColor"></path>
                        </svg>
                    </section>
                    <span class="searcher-input c-transition">
                        <svg class="svg-icon" data-name="Magnifying glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="SearchInputstyles__SearchIcon-sc-n42o5d-1 jNtoTz" width="18" role="presentation" alt="" data-testid="MagnifyingGlassIcon" size="18" color="currentColor">
                            <path class="icon" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="${this.search || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"}"></path>
                        </svg>

                        <input class="c-transition" placeholder="Busca juegos, equipos, noticias y más">
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
            
            `;
        }
    }
}
customElements.define("app-header", Header);
export default Header;
