export var appNews;
(function (appNews) {
    appNews["thumbnail"] = "thumbnail";
    appNews["date"] = "date";
    appNews["ntitle"] = "ntitle";
    appNews["content"] = "content";
})(appNews || (appNews = {}));
class News extends HTMLElement {
    static get observedAttributes() {
        const aNews = {
            thumbnail: null,
            date: null,
            ntitle: null,
            content: null
        };
        return Object.keys(aNews);
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
        <link rel="stylesheet" href="../app/components/news/news.css">
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
        `;
    }
}
customElements.define("app-news", News);
export default News;
