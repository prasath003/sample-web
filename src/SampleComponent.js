import { LitElement, html } from 'lit-element';
import recoverStyle from './SampleComponent.styles.js';

export class SampleComponent extends LitElement {

  static get styles() {
    return recoverStyle;
  }

  static get properties() {
    return {
      title: { type: String },
      icon:{type:String},
      prop:{type:Number}
    };
  }
 set prop(val){
   let oldVal=this._prop;
   this._prop=Math.floor(val);
   this.requestUpdate('prop',oldVal);
 }
 get prop() { return this._prop; }
  constructor() {
    super();
    this.title = 'Sample';
    this.icon=undefined;
    this._prop=0;
  }

  render() {
    console.log('  render');
    return html`
      <h2>Title is:${this.title}</h2> 
      <h3>Icon is:${this.ico}
      <p>prop: ${this.prop}</p>
     <button @click="${() =>  { this.prop = Math.random()*10; }}">
        change prop
      </button>`;


  }
  _requestUpdate(propertyName,OldValue){
    console.log('_requestUpdate called with args: '+propertyName+', '+oldValue);
    const result=super._requestUpdate(propertyName,oldValue);
    return result;
  }

  performUpdate(){
    console.log('performUpdate starts');
    const result=super.performUpdate();
    console.log('performUpdate ends');
    console.log('------------------------');
    return result;
  }

  shouldUpdate(args){
    console.log(' shouldUpdate called with args: '+JSON.stringify(args));
    const result=super.shouldUpdate(args);
    console.log(' shouldUpdate returns: '+result);
    return result;
  }

  update(args){
    console.log(' update called with args: '+JSON.stringify(args));
    const result=super.update(args);
    console.log(' update returns: '+result);
    return result;
  }

  firstUpdated(args){
    console.log(' firsrUpdated called with args: '+JSON.stringify(args));
    const result=super.firstUpdated(args);
    console.log(' firstUpdated return: '+result);
    return result;
  }

  updated(args){
    console.log(' updated called with args: ',+JSON.stringify(args));
    const result=super.updated(args);
    console.log(' updated returns: '+result);
    return result;
  }
}
// customElements.define('my-element',MyElement);