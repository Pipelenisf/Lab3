export var gShop;
(function (gShop) {
    gShop["gtitle"] = "gtitle";
    gShop["gimage"] = "gimage";
    gShop["gtext"] = "gtext";
    gShop["button"] = "button";
})(gShop || (gShop = {}));
class GameShop extends HTMLElement {
    static get observedAttributes() {
        const appShop = {
            gtitle: null,
            gimage: null,
            gtext: null,
            button: null,
        };
        return Object.keys(appShop);
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
        <hr>
        <section class="gsS">
            <section class="gameshop-section">
                <link rel="stylesheet" href="../app/components/banner/banner.css">
                <h1>${this.gtitle}</h1>
                <div class="image" style='background-image: url("${this.gimage}");'></div>
                <div class="gs-content">
                    <span>
                        <h3>${this.gtext}</h3>
                        <button class="call-to-act">${this.button}</button>
                    </span>
                </div>
            </section>
        </section>        
        <hr>
        `;
    }
}
customElements.define("app-gameshop", GameShop);
export default GameShop;
