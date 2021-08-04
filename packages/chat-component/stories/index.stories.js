import { html } from 'lit-element';
import '../../../__element-definitions/chat-component.js';

export default {
  title: 'ChatComponent',
  component: 'chat-component',
};
const messages = [
  {
    id: 'user1',
    body: 'Hello ',
  },
  {
    id: 'user2',
    body: 'How are you?',
  },
];
export const chat = () =>
  html` <chat-component id=${messages[0].id} body=${messages[0].body}></chat-component> `;
