import { LitElement, html } from 'lit-element';
import { styles } from './ListBubbleComponent.styles.js';

export class ListBubbleComponent extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      id: { type: String },
      body: { type: String },
    };
  }

  constructor() {
    super();
    this.id = undefined;
    this.body = undefined;
  }

  render() {
    return html`
        <div class="container">
        <div id=${this.id}>${this.body}</div>
        </div>
    `;
  }
}
