import { LitElement, html } from 'lit-element';
import { Styles } from './HeaderComponent.styles.js';
import { call, attachment, morevert, leftarrow } from '../assets/index.js';



export class HeaderComponent extends LitElement {

  static get styles() {
    return Styles;
  }

  static get properties() {
    return {
      name: { type: String },
      time: { type: String },
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.name = undefined;
    this.time = undefined;
    this.icon = undefined;

  }

  render() {
    return html`
    <div id="container">
  <div id="header" class="user-bar">
  <div class="back">
  <img  src="data:image/svg+xml;charset=utf8,${leftarrow}" />
   </div>
   <div class="avatar">
   <img  src="${this.icon}" alt="Ambani"/>
  </div>
  <div class="name">
  <span id="name">${this.name}</span>
  <span class="status"> ${this.time}</span>
</div>
<div class="actions more">
<img  src="data:image/svg+xml;charset=utf8,${morevert}" />
</div>
<div class="actions attachment">
<img  src="data:image/svg+xml;charset=utf8,${attachment}"/>
</div>
<div  class="actions">
<img  src="data:image/svg+xml;charset=utf8,${call}"/>
</div>
</div>
  </div>
  <div id="body">
    
  </div>
</div>
     `
  }
}