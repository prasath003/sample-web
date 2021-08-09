import { LitElement, html } from 'lit-element';
import { Styles } from './ClickComponent.styles.js';


export class ClickComponent extends LitElement {
  static get styles() {
    return Styles;
  }

  static get properties() {
    return {
      name: { type: String },
      mail: { type: String },
      psw: { type: String },
    };
  }

  constructor() {
    super();
    this.name = undefined;
    this.mail = undefined;
    this.psw = undefined;

  }

  render() {
    return html`
    <div class="container">
    <h2>Login page</h2>
    <input id="name" type="name" placeholder="enter name" value="${this.name}">
    <input id="mail" type="email" placeholder="enter mail" value="${this.mail}">
    <input id="psw" type="password" placeholder="enter pswd" value="${this.psw}">
    <button @click="${this._login}">login</button>
     `;
  }
  _login() {
    alert("Hello " + (this.name));
  }
}
