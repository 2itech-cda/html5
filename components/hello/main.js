(function () {

    const template = document.createElement('template');

    template.innerHTML = `
        <h2 class="title">Hello World Component</h2>
        <p>Bonjour <span class="app-name"></span></p>
        <input class="app-input">
    `;

    const style = `
        .title {
            color: royalblue;
        }
        .app-input {
            width: 300px;
            border: 1px solid #ccc;
            outline: none;
        }
    `;

    class AppHelloComponent extends HTMLElement {

        constructor() {
            super();

            this.shadow = this.attachShadow({
                mode: 'open'
            });

            this.shadow.appendChild(template.content.cloneNode(true));
        }

        connectedCallback() {
            const styleElem = document.createElement('style');
            styleElem.textContent = style;
            this.shadow.appendChild(styleElem);

            this.shadow.querySelector('.app-name').textContent = this.prenom;
            const input = this.shadow.querySelector('.app-input');

            input.addEventListener('input', e => {
                this.shadow.querySelector('.title').innerText = e.target.value;
            });
        }

        get prenom() {
            return this.hasAttribute('prenom') ? this.getAttribute('prenom') : 'tout le monde';
        }

        set prenom(newValue) {
            this.setAttribute('prenom', newValue);
        }
    }


    window.customElements.define('app-hello', AppHelloComponent);

})();