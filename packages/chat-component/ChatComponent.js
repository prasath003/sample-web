import { LitElement, html } from 'lit-element';
import { styles } from './ChatComponent.styles.js';

export class ChatComponent extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {};
  }

  // constructor() {
  //   super();

  // }

  render() {
    return html`
      <div class="con">
        <div id="head">
          <img src="" alt="mukesh ambani" />
          <h1>Pikachu</h1>
          <h3>Online</h3>
        </div>
        <div id="body">
          <div id="user1">Hi</div>
          <div id="user2">Hello</div>
          <div id="user1">How are you?</div>
          <div id="user2">I am fine and what about you?</div>
          <div id="user1">I am also fine but I am getting bored here.</div>
          <div id="user2">So you can spend your time at youtube watching programming videos.</div>
          <div id="user2">I am sure you will learn something new.</div>
          <div id="user1">Ok Sure</div>
          <div id="user2">Did you watch any new movie?</div>
          <div id="user1">
            yes, The good dinosaur. It is very interesting.THe film is all about a friendship fairy
            tale.
          </div>
        </div>
        <div id="btm">
          <form id="">
            <input
              type="text"
              id="text"
              name=""
              placeholder="Enter your Message..."
              autocomplete="off"
            />
          </form>
        </div>
      </div>
    `;
  }
}
