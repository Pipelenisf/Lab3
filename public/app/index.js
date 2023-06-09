import './components/index.js';
//import headerData from './components/data/headerData.js';
import { AppHeader } from './components/header/header.js';
import { oCard } from './components/oCard/oCard.js';
import { appBanner } from './components/banner/banner.js';
import { gShop } from './components/gameShop/gameShop.js';
import { appConsoles } from './components/consolesInfo/consoles.js';
import { appNews } from './components/news/news.js';
import oCardData from './components/data/oCardData.js';
import nCardData from './components/data/nCardData.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.oCardAttributes = [];
        this.nAttributes = [];
        this.attachShadow({ mode: "open" });
        const aHeader = this.ownerDocument.createElement("app-header");
        aHeader.setAttribute(AppHeader.logo, "M17.945 14.157l-4.85-7.838H9.609V17.59h3.486V9.752l4.85 7.838h3.456V6.32h-3.486l.03 7.837zm27.554-4.04V8.993H43.68v-1.52h-3.395v1.52h-1.849v1.124h1.85v7.473h3.394v-7.473h1.82zM23.341 17.56h3.364v-7.474h-3.364v7.474zm0-8.932h3.395V6.319H23.34v2.309zm59.17.942c-2.728 0-4.941 1.883-4.941 4.192s2.213 4.193 4.94 4.193c2.729 0 4.942-1.884 4.942-4.193 0-2.309-2.213-4.192-4.941-4.192zm1.364 5.772c0 1.185-.698 1.67-1.364 1.67-.667 0-1.395-.485-1.395-1.67v-3.16c0-1.184.697-1.67 1.395-1.67.666 0 1.364.486 1.364 1.67v3.16zm-10.73-4.891c-.547-.304-1.123-.608-1.91-.669-2.426-.212-4.305 1.945-4.305 3.92 0 2.612 2 3.554 2.304 3.706 1.152.516 2.607.547 3.88-.274v.426h3.334V6.32h-3.334c.03 0 .03 2.4.03 4.13zm.03 3.342v1.336c0 1.155-.789 1.458-1.334 1.458-.546 0-1.334-.303-1.334-1.458v-2.673c0-1.155.788-1.458 1.334-1.458.515 0 1.333.303 1.333 1.458v1.337zM34.616 9.752c-1.122.03-2.031.516-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.607-1.367.909 0 1.546.73 1.546 1.367v4.922h3.364v-4.071c0-2.947-2.546-3.798-3.82-3.737zm27.433 0a4.075 4.075 0 0 0-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.606-1.367.91 0 1.546.73 1.546 1.367v4.922h3.365v-4.071c0-2.947-2.546-3.798-3.82-3.737zm-7.063 4.101c0-2.309-2.243-4.253-4.971-4.253-2.759 0-4.972 1.884-4.972 4.193 0 2.308 2.213 4.192 4.972 4.192 2.273 0 4.213-1.306 4.789-3.068H51.44v.455c0 1.367-.91 1.671-1.394 1.671-.515 0-1.425-.304-1.425-1.67v-1.55l6.366.03zm-6.123-2.643a1.391 1.391 0 0 1 1.182-.668c.455 0 .91.213 1.182.668.212.365.212.82.212 1.458H48.62c0-.637.03-1.063.243-1.458zm39.921-3.493c0-.365-.272-.547-.818-.547h-.758v1.914h.455v-.79h.242l.364.79h.515l-.424-.851c.273-.091.424-.273.424-.516zm-.879.273h-.242v-.547h.212c.273 0 .424.091.424.274 0 .212-.12.273-.394.273zm.03-1.58c-.94 0-1.727.79-1.727 1.732s.788 1.732 1.728 1.732 1.727-.79 1.727-1.732a1.73 1.73 0 0 0-1.727-1.732zm0 3.13a1.413 1.413 0 0 1-1.394-1.398c0-.76.637-1.398 1.395-1.398.757 0 1.394.638 1.394 1.398 0 .76-.637 1.397-1.394 1.397zM84.148 0H12.64C5.062-.03 0 5.438 0 11.97c0 6.53 5.062 11.939 12.67 11.939h71.508c7.608 0 12.67-5.408 12.67-11.94C96.818 5.44 91.726 0 84.148 0zm-.03 20.993H12.671c-6.033.03-9.7-4.041-9.7-9.023 0-4.983 3.698-8.993 9.7-9.023h71.446c6.002 0 9.7 4.04 9.7 9.023 0 4.982-3.668 9.023-9.7 9.023z");
        aHeader.setAttribute(AppHeader.search, "M31.564 28.745l-8.73-8.73a12.66 12.66 0 1 0-2.804 2.834l8.715 8.715a1.5 1.5 0 0 0 2.114 0l.705-.705a1.5 1.5 0 0 0 0-2.114zm-18.966-7.433A8.611 8.611 0 1 1 21.21 12.7a8.62 8.62 0 0 1-8.612 8.612z");
        aHeader.setAttribute(AppHeader.support, "M28.126.862H3.876A3.904 3.904 0 0 0 0 4.757v17.838a3.905 3.905 0 0 0 3.875 3.896h8.375c.125 0 .125 0 .125.125l3.626 4.397a.122.122 0 0 0 .125.125c.125 0 .125 0 .25-.125L20 26.616a.122.122 0 0 1 .124-.125h8.001A3.904 3.904 0 0 0 32 22.595V4.757A3.903 3.903 0 0 0 28.126.862zM17.954 20.91a2.018 2.018 0 0 1-.438.64 2.062 2.062 0 0 1-1.446.58 2.092 2.092 0 0 1-.802-.154 1.944 1.944 0 0 1-.652-.43 1.98 1.98 0 0 1-.427-.642 2.119 2.119 0 0 1-.001-1.59 1.97 1.97 0 0 1 .43-.65 2.055 2.055 0 0 1 .643-.432 2.078 2.078 0 0 1 1.613 0 2.152 2.152 0 0 1 .64.428l.002.001a2.045 2.045 0 0 1 .438 2.25zm2.964-10.055a4.505 4.505 0 0 1-.662 1.159 5.04 5.04 0 0 1-.861.844l-.822.622a6.01 6.01 0 0 0-.626.538.766.766 0 0 0-.231.426l-.303 1.923h-2.517l-.222-2.13a1.824 1.824 0 0 1 .193-1.127 3.152 3.152 0 0 1 .648-.812 7.965 7.965 0 0 1 .838-.658 6.94 6.94 0 0 0 .782-.626 3.116 3.116 0 0 0 .574-.716 1.726 1.726 0 0 0 .208-.873 1.287 1.287 0 0 0-.112-.55 1.213 1.213 0 0 0-.318-.414 1.482 1.482 0 0 0-.506-.275 2.946 2.946 0 0 0-1.628.018 3.595 3.595 0 0 0-.666.277 8.824 8.824 0 0 0-.49.294.966.966 0 0 1-1.483-.33l-.872-1.378.24-.212a8 8 0 0 1 .86-.657 6.234 6.234 0 0 1 1.023-.55 6.4 6.4 0 0 1 1.192-.37 6.63 6.63 0 0 1 3.248.15 4.301 4.301 0 0 1 1.475.826 3.736 3.736 0 0 1 .966 1.314 4.161 4.161 0 0 1 .34 1.703 4.304 4.304 0 0 1-.268 1.584z");
        aHeader.setAttribute(AppHeader.wlist, "M22.3 1.3c-2.3 0-4.5 1-6.3 2.8-1.7-1.8-3.9-2.8-6.3-2.8C4.4 1.3 0 5.7 0 11.2c0 2.6 1.2 5.1 3.3 7.3L15 30.2c.3.3.6.4 1 .4.3 0 .7-.1 1-.4l11.6-11.6c1.5-1.8 3.3-4.3 3.3-7.5.1-5.4-4.3-9.8-9.6-9.8z");
        aHeader.setAttribute(AppHeader.account, "M16.22 19.41A9.71 9.71 0 1 1 26 9.7a9.74 9.74 0 0 1-9.8 9.71M1.84 32a10.88 10.88 0 0 1 10.94-10.74h6.57A10.88 10.88 0 0 1 30.29 32H1.84");
        aHeader.setAttribute(AppHeader.games, "M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z");
        aHeader.setAttribute(AppHeader.nswitch, "M13.54 0a.18.18 0 0 1 .17.17v31.66a.15.15 0 0 1-.17.17H8.11a6.86 6.86 0 0 1-6.85-6.8V6.74A6.81 6.81 0 0 1 8.11 0h5.43zm10.4 0a6.77 6.77 0 0 1 6.8 6.74V25.2a6.82 6.82 0 0 1-6.85 6.8h-5.43a.15.15 0 0 1-.17-.17V.17c0-.11.11-.17.22-.17h5.43zM7.49 19.6a1.26 1.26 0 1 0 0 2.51 1.32 1.32 0 0 0 1.31-1.25 1.28 1.28 0 0 0-1.31-1.26zm17-3.6a2.86 2.86 0 0 0-2.85 2.86A2.86 2.86 0 1 0 24.51 16zm-14.28.86a1.26 1.26 0 1 0 0 2.51 1.35 1.35 0 0 0 1.31-1.26 1.32 1.32 0 0 0-1.29-1.25zm-5.49 0a1.26 1.26 0 1 0 0 2.51 1.36 1.36 0 0 0 1.32-1.26 1.28 1.28 0 0 0-1.3-1.25zm2.75-2.69a1.26 1.26 0 1 0 0 2.52 1.37 1.37 0 0 0 1.33-1.26 1.28 1.28 0 0 0-1.31-1.26zm17-4a1.36 1.36 0 0 0-1.31 1.26 1.32 1.32 0 1 0 1.31-1.26zm-17-5.08a2.86 2.86 0 1 0 0 5.71 2.86 2.86 0 0 0 2.85-2.86 2.82 2.82 0 0 0-2.83-2.85zm19.77 2.4a1.26 1.26 0 1 0 1.31 1.25 1.32 1.32 0 0 0-1.29-1.25zm-5.43 0a1.26 1.26 0 1 0 1.31 1.25 1.29 1.29 0 0 0-1.29-1.25zm2.68-2.75A1.36 1.36 0 0 0 23.2 6a1.32 1.32 0 1 0 1.31-1.26z");
        aHeader.setAttribute(AppHeader.events, "M31.92 3.62a1.945 1.945 0 0 0-1.953-1.932H1.874A1.945 1.945 0 0 0-.08 3.62v10.068h32zm-32 11.692v7.201a2.027 2.027 0 0 0 1.954 1.998h8.711a2.777 2.777 0 0 1 2.178 1.073q2.97 4.736 3.315 4.728.344-.009 3.315-4.837a2.677 2.677 0 0 1 2.177-.964h8.398a2.027 2.027 0 0 0 1.953-1.998v-7.201zm14 5.15c0 .056-.07.1-.155.1H3.077c-.086 0-.156-.044-.156-.1v-1.051c0-.055.07-.1.156-.1h10.688c.086 0 .156.045.156.1z");
        this.hAttributes = aHeader;
        oCardData.forEach((card) => {
            const oCards = this.ownerDocument.createElement("offer-card");
            oCards.setAttribute(oCard.thumbnail, card.thumbnail);
            oCards.setAttribute(oCard.ctitle, card.ctitle);
            oCards.setAttribute(oCard.device, card.device);
            this.oCardAttributes.push(oCards);
        });
        const bAtt = this.ownerDocument.createElement("app-banner");
        bAtt.setAttribute(appBanner.background, "https://media.discordapp.net/attachments/1010976865424506900/1087775219676098760/bg-purple.png?width=1031&height=580");
        bAtt.setAttribute(appBanner.banner, "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1500/ncom/en_US/merchandising/center-stage-banner/bayonetta-origins/3600x1300_BayoOrigins_centerstage_desktop");
        bAtt.setAttribute(appBanner.button, "Más información");
        bAtt.setAttribute(appBanner.classification, "data:image/png;base64,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");
        this.bannerAttributes = bAtt;
        const gSAtt = this.ownerDocument.createElement("app-gameshop");
        gSAtt.setAttribute(gShop.gtitle, "Tienda de juegos");
        gSAtt.setAttribute(gShop.gimage, "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1200/ncom/es_LA/merchandising/homepage-banners/4576x744_LATAM_GameStoreBanner_01_SP");
        gSAtt.setAttribute(gShop.gtext, "¡Compra, descarga y juega de inmediato!");
        gSAtt.setAttribute(gShop.button, "Comprar juegos");
        this.gSAttributes = gSAtt;
        const cAtt = this.ownerDocument.createElement("app-consoles");
        cAtt.setAttribute(appConsoles.ctitle, "Explora las consolas de videojuegos");
        cAtt.setAttribute(appConsoles.cimage, "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1200/ncom/en_US/switch/site-design-update/switch-family-es");
        cAtt.setAttribute(appConsoles.ctext, "Familia Nintendo Switch");
        cAtt.setAttribute(appConsoles.button, "Más detalles");
        this.cAttributes = cAtt;
        nCardData.forEach((card) => {
            const nCard = this.ownerDocument.createElement("app-news");
            nCard.setAttribute(appNews.thumbnail, card.thumbnail);
            nCard.setAttribute(appNews.date, card.date);
            nCard.setAttribute(appNews.ntitle, card.ntitle);
            nCard.setAttribute(appNews.content, card.content);
            this.nAttributes.push(nCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../app/style.css">
            `;
            const headerSection = this.ownerDocument.createElement("header");
            headerSection.appendChild(this.hAttributes);
            this.shadowRoot.appendChild(headerSection);
            const bannerSection = this.ownerDocument.createElement("section");
            bannerSection.appendChild(this.bannerAttributes);
            this.shadowRoot.appendChild(bannerSection);
            const titleFeature = this.ownerDocument.createElement("h1");
            titleFeature.setAttribute("class", "title");
            const titleText = this.ownerDocument.createTextNode("Destacados");
            titleFeature.appendChild(titleText);
            this.shadowRoot.appendChild(titleFeature);
            const oCardSection = this.ownerDocument.createElement("section");
            oCardSection.setAttribute("class", "o-card-section");
            this.oCardAttributes.forEach((Cards) => {
                var _a;
                oCardSection.appendChild(Cards);
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(oCardSection);
            });
            const gameShopSection = this.ownerDocument.createElement("section");
            gameShopSection.appendChild(this.gSAttributes);
            this.shadowRoot.appendChild(gameShopSection);
            gameShopSection.setAttribute("class", "gs-section");
            const consolesSection = this.ownerDocument.createElement("section");
            consolesSection.appendChild(this.cAttributes);
            this.shadowRoot.appendChild(consolesSection);
            const newsSection = this.ownerDocument.createElement("section");
            newsSection.setAttribute("class", "news-section");
            this.nAttributes.forEach((card) => {
                var _a;
                newsSection.appendChild(card);
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(newsSection);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
