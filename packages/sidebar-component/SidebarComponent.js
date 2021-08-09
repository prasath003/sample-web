import { LitElement, html } from 'lit-element';
import { styles } from './SidebarComponent.styles.js';
import '../../__element-definitions/connected-component.js';
import '../../__element-definitions/list-bubble-component.js';

export class SidebarComponent extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
       items: { type: Array },
    };
  }

  constructor() {
    super();
    this.items=[];
  }

  render() {
    return html`
      <div id="chatContainer">
     <connected-component items=${this.items}></connected-component>
     <list-bubble-component></list-bubble-component>
      </div>
    `;
  }
}
