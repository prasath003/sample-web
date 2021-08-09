import { html } from 'lit-element';
import '../../../__element-definitions/click-component.js';

export default {
  title: 'ClickComponent',
  component: 'click-component',
};

const click = [
  {
    name: 'Pari',
    mail: 'pari@abc.com',
    psw: 'Pari@123',
  }
];

export const Demo = () =>
  html`
    <click-component
    name=${click[0].name}
    mail=${click[0].mail}
    psw=${click[0].psw}
  ></click-component>
  `;
