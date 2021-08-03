import { html } from 'lit-element';
import '../../../__element-definitions/connected-component.js';

export default {
  title: 'ConnectedComponent',
  component: 'connected-component',
};

const list = [
  {
    name: 'Mukesh Ambani 1',
    icon: 'ok',
    msg: 'sample',
  },
  {
    name: 'Mukesh Ambani 2',
    icon: 'ok',
    msg: 'sample',
  },
];

export const Demo = () =>
  html` <connected-component items="${JSON.stringify(list)}"></connected-component> `;
