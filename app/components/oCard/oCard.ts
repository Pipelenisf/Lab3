export enum oCard {
    "thumbnail" = "thumbnail",
    "ctitle" = "ctitle",
    "device" = "device"
}

class OfferCard extends HTMLElement{
    
    thumbnail?: string;
    ctitle?: string;
    device?: string


    static get observedAttributes(){
        
        const oCardAtt: Record <oCard,null> = {
            thumbnail: null,
            ctitle: null,
            device: null,
        }

        return Object.keys(oCardAtt);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    attributeChangedCallback(propName:oCard, _:string, newValue:string){

        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot)
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

customElements.define("offer-card",OfferCard);
export default OfferCard;