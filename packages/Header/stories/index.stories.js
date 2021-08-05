import { html } from 'lit-element';
import '../../../__element-definitions/header-component.js';

export default {
  title: 'HeaderComponent',
  component: 'header-component',
};
const header = [
  {
    name: 'Mukesh Ambani ',
    time: 'wed at 4:30 P.M',
    icon: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7829a7ea434b351ba0b6%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D206%26cropX2%3D2043%26cropY1%3D250%26cropY2%3D2089'
  }
]

export const Demo = () =>
  html` <header-component name=${header[0].name} time=${header[0].time} icon=${header[0].icon}></header-component> `;