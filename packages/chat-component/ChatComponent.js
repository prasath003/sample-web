import { LitElement, html } from 'lit-element';
import { styles } from './ChatComponent.styles.js';

export class ChatComponent extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      name: { type: String },
      
    };
  }

  constructor() {
    super();
    this.name = '';
    
  }

  render() {
    return html`
      <div class="container">
        <div class=" header"></div>
        <div class="body"></div>
        <div class="footer">
          <form>
            <input type="text" name="" />
            <button>SEND</button>
          </form>
        </div>
      </div>
    `;
  }
}
