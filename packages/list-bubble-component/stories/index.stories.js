import { html } from 'lit-element';
import '../../../__element-definitions/list-bubble-component.js';

export default {
  title: 'ListBubbleComponent',
  component: 'list-bubble-component',
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
  html` <list-bubble-component id=${messages[0].id} body=${messages[0].body}></list-bubble-component> `;
