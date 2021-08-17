import { LitElement, html } from 'lit-element';
import { styles } from './dropdownComponent.styles.js';

export class DropdownComponent extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      selected: { type: String, reflect: true },
      closed: { type: Boolean, reflect: true },
      options: { type: Array }
    };
  }

  constructor() {
    super();
    this.title = 'Choose your language';
    this.value = '---None---';   
    this.options = ['German', 'English', 'France']; 
    this.closed = true;  

  }

  toggleMenu() {
    this.closed = !this.closed;
}

handleMenuOption(event, option) {
    this.value = option;
    const customEvent = new CustomEvent('selectionChanged', {
        detail: {
            option: this.value
        }
    });
    this.dispatchEvent(customEvent);
    this.toggleMenu(event);
}

  render() {
    return html`
    <div class='label'>${this.title}</div>
    <div class='head' @click='${this.toggleMenu}'>
        <div class='choice'>${this.value}</div>
        <div class='toggle ${this.closed ? 'closed' : 'open'}'></div>
    </div>
    <div class='body ${this.closed ? 'closed' : 'open'}'>
        ${this.options.map(option => html`<div class='option' @click='${(e) => this.handleMenuOption(e, option)}'>${option}</div>`)}
    </div>
    `;
  }
}
