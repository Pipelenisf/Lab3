export var oCard;
(function (oCard) {
    oCard["thumbnail"] = "thumbnail";
    oCard["ctitle"] = "ctitle";
    oCard["device"] = "device";
})(oCard || (oCard = {}));
class OfferCard extends HTMLElement {
    static get observedAttributes() {
        const oCardAtt = {
            thumbnail: null,
            ctitle: null,
            device: null,
        };
        return Object.keys(oCardAtt);
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
        <link rel="stylesheet" href="../app/components/oCard/oCard.css">
            <div class="o-card">
                <div class="card" style="background-image:url(${this.thumbnail || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png"});">
                </div>
                <p class="title links c-transition">${this.ctitle || "Not found"}</p>
                <p class="device text">${this.device || "No device"}</p> 
            </div>
        `;
    }
}
customElements.define("offer-card", OfferCard);
export default OfferCard;
