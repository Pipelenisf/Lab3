export var appConsoles;
(function (appConsoles) {
    appConsoles["ctitle"] = "ctitle";
    appConsoles["cimage"] = "cimage";
    appConsoles["ctext"] = "ctext";
    appConsoles["button"] = "button";
})(appConsoles || (appConsoles = {}));
class Consoles extends HTMLElement {
    static get observedAttributes() {
        const appC = {
            ctitle: null,
            cimage: null,
            ctext: null,
            button: null,
        };
        return Object.keys(appC);
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
        `;
    }
}
customElements.define("app-consoles", Consoles);
export default Consoles;
