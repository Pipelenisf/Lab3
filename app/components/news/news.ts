export enum appNews {
    "thumbnail" = "thumbnail",
    "date" = "date",
    "ntitle" = "ntitle",
    "content" = "content"
}

class News extends HTMLElement{

    thumbnail?: string;
    date?: string;
    ntitle?: string;
    content?: string;


    static get observedAttributes(){
        const aNews: Record<appNews, null> = {
            thumbnail: null,
            date: null,
            ntitle: null,
            content: null
        }
        return Object.keys(aNews)
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    attributeChangedCallback(propName:appNews, _:string, newValue:string){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <section>
            <div class="news-card">
                <div class="thumbnail" style='background-image: url("${this.thumbnail}");'></div>
                <p class="date">${this.date}</p>
                <h3>${this.ntitle}</h3>
                <p class="content">${this.title}</p>
                <p>${this.content}</p>
                <p class="link">Leér más</p>
            </div>
        </section>
        `
    }
}

customElements.define("app-news", News);
export default News;