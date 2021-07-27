import { LitElement, html } from 'lit-element';
import recoverStyle from './SampleComponent.styles.js';
import '../../__element-definitions/list-component.js';

export class SampleComponent extends LitElement {
  static get styles() {
    return recoverStyle;
  }

  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();

    this.items = [
      { name: 'venky', url: '' },
      {
        name: 'vidya',
        url: '',
      },
    ];
  }

  render() {
    return html` <div>${this.renderList()}</div> `;
  }

  renderList() {
    return this.items.map(({ name }) => html`<list-component name=${name}></list-component>`);
  }
}
