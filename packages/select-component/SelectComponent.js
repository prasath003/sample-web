import { LitElement, html } from 'lit-element';
import { styles } from './SelectComponent.styles.js';

export class SelectComponent extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      mood: { type: String },
    };
  }

  constructor() {
    super();
    this.mood = 'great';
  }

  render() {
    return html` <div>
      Web Components are <span class="mood">${this.mood}</span>!

      <p><a href="/">Top</a></p>
      <p><a href="/foo">Foo</a></p>
      <p><a href="/bar">Bar</a></p>
    </div>`;
  }
}
