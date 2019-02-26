const template = document.createElement('template');
template.innerHTML = `
    <div>Hello, world!</div>
    My name is <slot>Daniel</slot>!
`

class MyElem extends HTMLElement {
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode:`open`});
        const style = document.createElement(`style`);
        style.appendChild(document.createTextNode(
            `* {color: ${this.getAttribute(`color`)}}`
        ));

        shadowRoot.appendChild(template.content.cloneNode(true));
        shadowRoot.appendChild(style);
    }

    connectedCallback(){
        console.log("Element created. Color: ", this.getAttribute('color'));
    }
}

customElements.define('my-elem', MyElem);