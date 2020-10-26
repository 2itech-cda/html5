class AppHelloComponent extends HTMLElement {

    constructor() {
        super();

        console.log('constructor of app-hello');
    }

    connectedCallback() {
        console.log('Connected Callback');
    }

    disconnectedCallback() {
        console.log('Disconnected Callback');
    }

    greeting() {
        console.log('My Custom Element');
    }

}

window.customElements.define('app-hello', AppHelloComponent);
