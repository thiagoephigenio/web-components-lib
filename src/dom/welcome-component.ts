class WelcomeComponent extends HTMLElement {
  private content;

  static get observedAttributes() {
    return ['message'];
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    const style = document.createElement('style');
    
    wrapper.setAttribute('class', 'wrapper');
  
    this.content = document.createElement('span');
    this.content.textContent = 'Welcome to Web Components!';
    
    style.textContent = `
      .wrapper {
        display: flex;
        padding: 12px;
        font-size: 16px;
        background-color: #d1ecf1;
        border: 1px solid #bee5eb;
        border-radius: 5px;
        color: #0c5460;
      }
    `;
    
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(this.content);
  }

  attributeChangedCallback(name:string, _:string, newValue: string) {
    if (name === 'message') {
      this.content.textContent = newValue;
    }
  }
}

customElements.define('welcome-component', WelcomeComponent);

export default WelcomeComponent;
