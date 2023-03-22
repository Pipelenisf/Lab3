export enum appBanner {
    "background" = "background",
    "banner" = "banner",
    "button" = "button",
    "classification" = "classification",
}

class Banner extends HTMLElement {

    background?: string;
    banner?: string;
    button?: string;
    classification?: string;

    static get observedAttributes(){
        const appBanner: Record<appBanner, null> = {
            background: null,
            banner: null,
            button: null,
            classification: null,
        }
        return Object.keys(appBanner)
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    attributeChangedCallback(propName: appBanner, _:string, newValue: string){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML=`
        <section class="banner-section">
            <link rel="stylesheet" href="../app/components/banner/banner.css">
            <div class="background" style='background-image: url("${this.background}");'></div>
            <div class="banner-image" style='background-image: url("${this.banner}");'></div>
            <div class="content">
                <span>
                    <h1>Ya disponible</h1>
                    <button class="call-to-act">Más información</button>
                </span>
                <span>
                    <div class="classification" style='background-image: url("${this.classification}");'></div>
                    <p>Animación de sangre. Violencia de fantasía</p>
                </span>
            </div>
            <hr>
            <h1 class="title">Destacados</h1>
        </section>
        `
    }
}

customElements.define("app-banner", Banner);
export default Banner