import { LitElement, html } from 'lit-element';
import { styles } from './BubbleComponent.styles.js';
import '../../__element-definitions/chat-component.js';

export class BubbleComponent extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      data: { type: Array },
    };
  }

  constructor() {
    super();
    this.data = [];
  }

  render() {
    return html` <div>${this.renderList()}</div> `;
    
  }

  renderList() {
   return this.data.map(
      item => html`<chat-component id=${item.id} body=${item.body}></chat-component>`,
    );
  }
}
