import { LitElement, html } from 'lit-element';
import recoverStyle from './SampleComponent.styles.js';

export class SampleComponent extends LitElement {

  static get styles() {
    return recoverStyle;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Sample';
  }

  render() {
    return html`
      <h2>${this.title}</h2> `;
  }
}
