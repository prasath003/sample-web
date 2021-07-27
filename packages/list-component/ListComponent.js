import { LitElement, html } from 'lit-element';
import { styles } from './ListComponent.styles.js';

export class ListComponent extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      name: { type: String },
      icon: { type: String },
      date: { type: String },
    };
  }

  constructor() {
    super();
    this.name = '';
    this.icon = '';
    this.date = '';
  }

  render() {
    return html`
      <div class="chat-list">
        <div class="person-profile">
          <img src="${this.icon}" alt="" class="user-img" />
          <div class="person-name">
            <h1 class="persion-name-heading">${this.name}</h1>
            <p class="person-chat">Bhai Thode Paise Chahiye The...</p>
          </div>
        </div>
        <p class="last-chat-time">12:00 pm</p>
      </div>
    `;
  }
}
