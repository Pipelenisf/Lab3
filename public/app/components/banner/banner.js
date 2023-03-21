export var appBanner;
(function (appBanner) {
    appBanner["background"] = "background";
    appBanner["banner"] = "banner";
    appBanner["button"] = "button";
    appBanner["classification"] = "classification";
})(appBanner || (appBanner = {}));
class Banner extends HTMLElement {
    static get observedAttributes() {
        const appBanner = {
            background: null,
            banner: null,
            button: null,
            classification: null,
        };
        return Object.keys(appBanner);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    attributeChangedCallback(propName, _, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot)
            this.shadowRoot.innerHTML = `
        <section>
            <link rel="stylesheet" href="../app/components/banner/banner.css">
            <div class="background" style='background-image: url("${this.background}");'></div>
            <div class="banner-image" style='background-image: url("${this.banner}");'></div>
            <div>
                <span>
                    <h1>Ya disponible</h1>
                    <button class="call-to-act">Mas información</button>
                </span>
                <span>
                    <div class="classification" style="background-image:url("${this.classification}");"></div>
                    <p>Animación de sangre. Violencia de fantasía</p>
                </span>
            </div>
        </section>
        `;
    }
}
customElements.define("app-banner", Banner);
export default Banner;
