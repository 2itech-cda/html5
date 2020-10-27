(function () {

    const template = document.createElement('template');

    template.innerHTML = `
        <h2 class="title">Hello World Component</h2>
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

            const input = this.shadow.querySelector('.app-input');

            input.addEventListener('input', e => {
                this.shadow.querySelector('.title').innerText = e.target.value;
            });
        }

    }

    window.customElements.define('app-hello', AppHelloComponent);

})();