import { LitElement, html } from 'lit-element';
import { styles } from './SampleComponent.styles.js';
import '../../__element-definitions/list-component.js';

export class SampleComponent extends LitElement {
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

    this.items = [];
  }

  render() {
    return html` <div>${this.renderList()}</div> `;
  }

  renderList() {
    return this.items.map(
      item => html`<list-component name=${item.name} icon=${item.icon}></list-component>`,
    );
  }
}
