(function (){

    const template = document.createElement('template');
    const style = document.createElement('style');

    template.innerHTML = `
        <div class="tags">
            <span class="tags-item">Paris <span class="tags-remove">x</span></span>
            <input type="text" class="tags-input" placeholder="Add tag">
        </div>
    `;

    style.textContent = `
        :host(.test) {
            background-color: #ddd;
            border-radius: 3px;
            padding: 10px;
            display: block;
            margin-bottom: 10px;
        }

        :host-context(.container) {
            padding: 30px;
            background-color: red;

            left: 0;
            top: 0;
            margin-top: 30px;
            display: block;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            padding: 2px 0;
            border-radius: 4px;
            border: 1px solid #b6b6b6;
            background-color: white;
        }

        .tags-item {
            display: flex;
            align-items: center;
            padding: 4px;
            margin: 4px 0 4px 6px;
            border: 1px solid #DDD;
            border-radius: 2px;
            background-color: #F6F6F6;
        }

        .tags-remove {
            margin-left: 10px;
            cursor: pointer;
        }

        .tags-input {
            flex: 1;
            height: 100%;
            margin: 8px 0;
            padding-left: 6px;
            outline: none;
            border: 0;
            font: inherit;
        }

        .tags-input,
        .tags-input:focus {
            outline-offset: -2px;
        }
    `;

    class MyElement extends HTMLElement {
        constructor() {
            super();
        }

        getName() {
            return 'John';
        }
    }

    class AppTagsElement extends MyElement {
        constructor() {
            super();

            console.log(this.getName());

            this.onAdd = this.onAdd.bind(this);
            this.onRemove = this.onRemove.bind(this);
            //[this.onRemove, this.onAdd].forEach(method => method = method.bind(this));

            this.shadowDom = this.attachShadow({
                mode: 'open',
            });

            this.shadowDom.appendChild(style.cloneNode(true));
            this.shadowDom.appendChild(template.content.cloneNode(true));

            this.tags = this.shadowDom.querySelector('.tags');
            this.input = this.shadowDom.querySelector('.tags-input');
        }

        onRemove(event) {
            if (event.target.classList.contains('tags-remove')) {
                event.target.parentNode.remove();
            }
        }

        onAdd(event) {
            const input = event.target;

            // Vérification de la touche frapper par l'utilisateur.
            if (event.key === 'Enter' || event.key === 'Tab') {
                event.preventDefault();

                // "  hello  " == "hello"
                // "         " == "" 
                if (input.value.trim()) {
                    // Création du tag à ajouer
                    this.tag = document.createElement('span');
                    this.tag.className = 'tags-item';
                    this.tag.innerHTML = `${input.value} <span class="tags-remove">x</span>`;

                    // Insertion du tag avant le champ texte.
                    this.tags.insertBefore(this.tag, input);
                    input.value = '';
                }
            }
        }

        connectedCallback() {
            this.tags.addEventListener('click', this.onRemove, false);
            this.input.addEventListener('keydown', this.onAdd, false);
        }

        disconnectedCallback() {
            this.tags.removeEventListener('click', this.onRemove, false);
            this.input.removeEventListener('keydown', this.onAdd, false);
        }
    }

    window.customElements.define('app-tags', AppTagsElement);

})();