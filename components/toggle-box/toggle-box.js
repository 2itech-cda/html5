(function () {

    const tmpl = document.createElement('template');
    const style = document.createElement('style');

    tmpl.innerHTML = `
        <div class="toggle-box">
            <h2 class="toggle-box-title">Title of the box</h2>
            <div class="toggle-box-body">
                <slot name="text1">
                <slot name="text2">
            </div>
        </div>
    `;

    style.textContent = `
        .toggle-box {
            padding: 10px;
            background-color: #eee;
            margin-bottom: 10px;
            border: 1px solid #ccc;
        }
        .toggle-box-title {
            margin: 0;
            padding: 5px;
            cursor: pointer;
        }
        .toggle-box-body {
            padding: 10px;
        }
        .toggle-box-body-hide {
            display: none;
        }
    `;

    class AppToggleBoxElement extends HTMLElement {

        constructor() {
            super();

            this.onToggle = this.onToggle.bind(this);

            this.shadow = this.attachShadow({
                mode: 'open',
            });

            this.shadow.appendChild(style.cloneNode(true));
            this.shadow.appendChild(tmpl.content.cloneNode(true));

            this.toggleTitle = this.shadow.querySelector('.toggle-box-title');
            this.toggleBody = this.shadow.querySelector('.toggle-box-body');
        }

        connectedCallback() {
            this.toggleBody.classList.toggle('toggle-box-body-hide', !this.state);
            this.toggleTitle.textContent = this.title;
            this.toggleTitle.addEventListener('click', this.onToggle, false);
        }

        onToggle() {
            this.toggleBody.classList.toggle('toggle-box-body-hide');
        }

        get title() {
            return this.hasAttribute('title') ? this.getAttribute('title') : 'Untitled';
        }

        get state() {
            const state = this.hasAttribute('state') ? this.getAttribute('state') : 'true';
            let flag = true;

            if (state === 'false') {
                flag = false;
            }

            if (state === 'true') {
                flag = true;
            }

            return flag;
        }
    }

    window.customElements.define('app-toggle-box', AppToggleBoxElement);

})();