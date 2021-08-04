import { html } from 'lit-element';
import '../../../__element-definitions/bubble-component.js';

export default {
  title: 'BubbleComponent',
  component: 'bubble-component',
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
  {
    id: 'user1',
    body: 'I am fine thanks',
  },
  {
    id: 'user2',
    body: 'Glad to hear that',
  },
];

export const Demo = () =>
  html` <bubble-component data="${JSON.stringify(messages)}"></bubble-component> `;
