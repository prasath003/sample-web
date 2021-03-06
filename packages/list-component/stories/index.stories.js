import { html } from 'lit-element';
import '../../../__element-definitions/list-component.js';

export default {
  title: 'ListComponent',
  component: 'list-component',
};
const list = [
  {
    name: 'Mukesh Ambani',
    icon: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7829a7ea434b351ba0b6%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D206%26cropX2%3D2043%26cropY1%3D250%26cropY2%3D2089',
    msg: 'Bhai Thode Paise Chahiye The...',
  },
];
export const Demo = () =>
  html`
    <list-component name=${list[0].name} icon=${list[0].icon} msg=${list[0].msg}></list-component>
  `;
