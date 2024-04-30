export default class BoredApp extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="card">
        <div class="card-body">
            <p id="activity"></p>
            <input type="number" id="particip">
            <button id="valider">Validate</button>
        </div>
        </div>`;

        this.valider = this.querySelector("#valider");
        this.particip = this.querySelector("#particip");
        this.activity = this.querySelector("#activity");
        
        this.valider.addEventListener('click', () => this.load());
    }

    async load() {
        let url = `https://www.boredapi.com/api/activity?participants=${this.particip.value}`;
        let response = await fetch(url);
        let data = await response.json();
        this.activity.innerText = data.activity;
    }
}
