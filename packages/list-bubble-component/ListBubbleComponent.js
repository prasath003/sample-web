import { LitElement, html } from 'lit-element';
import { styles } from './ListBubbleComponent.styles.js';
import '../../__element-definitions/bubble-component.js';

export class ListBubbleComponent extends LitElement {
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
      item => html`<bubble-component id=${item.id} body=${item.body}></bubble-component>`,
    );
  }
}
