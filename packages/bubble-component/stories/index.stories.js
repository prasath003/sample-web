import { html } from 'lit-element';
import '../../../__element-definitions/bubble-component.js';

export default {
  title: 'BubbleComponent',
  component: 'bubble-component',
};

const messages = [
  { id: 'user1', body: 'Hi' },
  { id: 'user2', body: 'Hello' },
  { id: 'user1', body: 'How you  doing?' },
  { id: 'user2', body: 'Doing great!' },
];

export const Demo = () =>
  html` <bubble-component data="${JSON.stringify(messages)}"></bubble-component> `;
