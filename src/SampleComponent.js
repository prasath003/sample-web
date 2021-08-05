import { LitElement, html } from 'lit-element';
import { Style } from './SampleComponent.styles.js';

export class SampleComponent extends LitElement {

  static get styles() {
    return Style;
  }

  static get properties() {
    return {

      title: { type: String },
      title1: { type: String },
      title2: { type: String },
    };
  }

  constructor() {
    super();

    this.title = 'What is LitElement?';
    this.title1 = 'LitElement is a simple base class for creating fast, lightweight web components that work in any web page with any framework.';
    this.title2 = 'click here for more..';
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <h4>${this.title1}</h4>
      <h4><a href="https://lit-element.polymer-project.org/guide ">${this.title2}</a></h4>`
  }
}
