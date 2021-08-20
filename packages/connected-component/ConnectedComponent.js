import { LitElement, html } from 'lit-element';
import { styles } from './ConnnectedComponent.styles.js';
import '../../__element-definitions/list-component.js';
import '../../__element-definitions/list-bubble-component.js';
export class ConnectedComponent extends LitElement {
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
      item => html`<list-component @click=${()=>this.clickHandler(item.id)} name=${item.name} icon=${item.icon}></list-component>`,
       
    );
  }

  clickHandler(id){
    console.log(id);
    console.log("this is clicked");
     
    return html`<list-bubble-component></list-bubble-component>`
   
  }
}
