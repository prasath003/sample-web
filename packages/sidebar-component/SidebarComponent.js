import { LitElement, html } from 'lit-element';
import { styles } from './SidebarComponent.styles.js';
import '@vaadin/vaadin-checkbox';

const visibilityFilters={
  SHOW_ALL:'All',
  SHOW_ACTIVE:'Active',
  SHOW_COMPLETED:'Completed'
};
export class SidebarComponent extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
       todos: { type: Array },
       filter:{type:String},
       task:{type:String},
       clicked:{type:Boolean},
       count:{type:Number}
    };
  }

  constructor() {
    super();
    this.todos=[];
    this.filter=visibilityFilters.SHOW_ALL;
    this.task='';
    this.clicked=false;
    this.count=0;
  }

  render() {
    return html`
     <div class="input-layout ">
     <input type="text" placeholder="task" value="${this.task}" @change="${()=>this.updateTask()}"/>
     <button @click="${()=>this.addTodo()}"
     >Add todo</button>
     <button @click="${()=>this.handleClick()}">Toggle Color</button>
      <div class="${this.clicked ? "pink" : ""}"></div>
      <p><button @click=${this._increment}>Click me!</button></p>
       <p>Click count: ${this.count}</p>
     </div>
    
    `;
  }
  handleClick(){
    this.clicked=!this.clicked;
    console.log("clicked");
  }
  _increment(e){
    this.count++;
  }
  updateTask(e){
    this.task=e.target.value;
  }
  addTodo(){
    
    if(this.task){
      console.log("this is clicked");
      this.todos=[...this.todos,{
        task:this.task,
        complete:false
         
      }];
      
      this.task=' ';
    }
   
  }

}
