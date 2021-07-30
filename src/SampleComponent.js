import { LitElement, html } from 'lit-element';
import recoverStyle from './SampleComponent.styles.js';

export class SampleComponent extends LitElement {

  static get styles() {
    return recoverStyle;
  }

  constructor() {
    super();
    this.title = 'No title';
    this.icon = undefined;
    this.prop= 0;
  }
//custom defined functions --set and get
  set prop(val) {
    let oldVal = this._prop;
    this._prop = Math.floor(val);
    this.requestUpdate('prop', oldVal);
  }
  get prop() { return this._prop; }
  static get properties() {
    return {
      title: {type: String},
      icon: {type: String},
      prop: {type:Number}
    };
  }

  render() {
    console.log('    render');
    return html`
      <h1>Title is: ${this.title}</h1>
      <h3>Icon is: ${this.ico}</h3>
      <p>prop: ${this.prop}</p>
      <button @click="${() =>  { this.prop = Math.random()*10; }}">
        change prop
      </button>
      
    `;
  }

  
  _requestUpdate(propertyName, oldValue) {
    console.log('_requestUpdate called with args: ' + propertyName + ', ' + oldValue);
    const result = super._requestUpdate(propertyName, oldValue);
    return result;
  }

  performUpdate() {
    console.log('performUpdate starts');
    const result = super.performUpdate();
    console.log('performUpdate ends');
    console.log('--------------------------------------------------');
    return result;
  }

  shouldUpdate(args) {
    console.log('  shouldUpdate called with args: ' + JSON.stringify(args));
    const result = super.shouldUpdate(args);
    console.log('  shouldUpdate returns: ' + result);
    return result;
  }

  update(args) {
    console.log('  update called with args: ' + JSON.stringify(args));
    const result = super.update(args);
    console.log('  update returns: ' + result);
    return result;
  }

  firstUpdated(args) {
    console.log('  firstUpdated called with args: ' + JSON.stringify(args));
    const result = super.firstUpdated(args);
    console.log('  firstUpdated returns: ' + result);
    return result;
  }

  updated(args) {
    console.log('  updated called with args: ', + JSON.stringify(args));
    const result = super.updated(args);
    console.log('  updated returns: ' + result);
    return result;
  }
}

