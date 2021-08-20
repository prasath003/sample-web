import { html } from 'lit-element';
import '../../../__element-definitions/chat-component.js';

export default {
  title: 'ChatComponent',
  component: 'chat-component',
};

const messages = [
  { id: 'user1', body: 'Hi' },
  { id: 'user2', body: 'Hello' },
  { id: 'user1', body: 'How you  doing?' },
  { id: 'user2', body: 'Doing great!' },
];

export const chat = () =>
  html` <chat-component id=${messages[0].id} body=${messages[0].body}></chat-component> `;
