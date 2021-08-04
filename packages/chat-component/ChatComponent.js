import { LitElement, html } from 'lit-element';
import { styles } from './ChatComponent.styles.js';

export class ChatComponent extends LitElement {
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
      <body>
        <div id=${this.id}>${this.body}</div>
      </body>
    `;
  }
}
