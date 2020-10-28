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
        .tags {
            display: flex;
            flex-wrap: wrap;
            padding: 2px;
            border-radius: 4px;
            border: 1px solid #b6b6b6;
        }

        .tags-item {
            display: flex;
            align-items: center;
            margin: 4px 0 2px 4px;
            border: 1px solid #bababa;
            border-radius: 2px;
            background-color: #DDD;
            padding: 4px;
        }

        .tags-remove {
            margin-left: 10px;
            cursor: pointer;
        }

        .tags-input {
            flex-grow: 1;
            font: inherit;
            border: none;
            outline: none;
            padding-left: 6px;
        }
    `;

    class AppTagsElement extends HTMLElement {
        constructor() {
            super();

            this.shadowDom = this.attachShadow({
                mode: 'open',
            });

            this.shadowDom.appendChild(style.cloneNode(true));
            this.shadowDom.appendChild(template.content.cloneNode(true));

            this.tags = this.shadowDom.querySelector('.tags');
            this.input = this.shadowDom.querySelector('.tags-input');
        }

        connectedCallback() {
            this.input.addEventListener('keydown', event => {
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
            });
        }

    }


    window.customElements.define('app-tags', AppTagsElement);

})();