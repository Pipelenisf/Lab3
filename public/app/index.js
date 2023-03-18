// import  './components/index.js';
//import headerData from './components/data/headerData.js';
import { AppHeader } from './components/header/header.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const aHeader = this.ownerDocument.createElement("app-header");
        aHeader.setAttribute(AppHeader.logo, "https://logodownload.org/wp-content/uploads/2017/04/nintendo-logo-1-1.png");
        aHeader.setAttribute(AppHeader.search, "https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png");
        aHeader.setAttribute(AppHeader.support, "");
        aHeader.setAttribute(AppHeader.wlist, "");
        aHeader.setAttribute(AppHeader.account, "");
        this.hAttributes = aHeader;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            const headerSection = this.ownerDocument.createElement("section");
            headerSection.appendChild(this.hAttributes);
            this.shadowRoot.appendChild(headerSection);
        }
    }
}
customElements.define("app-container", AppContainer);
