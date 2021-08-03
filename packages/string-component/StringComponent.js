import { LitElement, html } from 'lit-element';
import { styles } from './StringComponent.styles.js';

export class StringComponent extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      message: { type: String },
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.count = 0;
    this.message = 'HEllo doremon';
  }

  // eslint-disable-next-line class-methods-use-this
  reverseMessage(message) {
    return message.split('').reverse().join('');
  }

  render() {
    return html`
   </div>
    <div>
      The message is: ${this.message}
      
    </div>
      <div>
      count is: ${this.count}
      </div>
    
    <div>
      The reversed message is: ${this.reverseMessage(this.message)}
    </div>
  </div>
`;
  }
}
