import { html } from 'lit-element';
import '../../../__element-definitions/chat-component.js';

export default {
  title: 'ChatComponent',
  component: 'chat-component',
};
const messages = [
  {
    id: 'user1',
    body: 'Hello world',
  },
  {
    id: 'user2',
    body: 'How are you?',
  },
];
export const chat = () =>
  html` <chat-component id=${messages[1].id} body=${messages[1].body}></chat-component> `;
