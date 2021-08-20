import { html } from 'lit-element';
import '../../../__element-definitions/bubble-component.js';

export default {
  title: 'BubbleComponent',
  component: 'bubble-component',
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
  html` <bubble-component id=${messages[0].id} body=${messages[0].body}></bubble-component> `;
