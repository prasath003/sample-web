import { html } from 'lit-element';
import '../../../__element-definitions/contact-component.js';

export default {
  title: 'ContactComponent',
  component: 'contact-component',
};
const contacts=[
  {
    name:'Mukesh Ambani ',
    time:'wed at 4:30 P.M',
    icon:'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7829a7ea434b351ba0b6%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D206%26cropX2%3D2043%26cropY1%3D250%26cropY2%3D2089'
  }
]

export const chat = () =>
  html` <contact-component name=${contacts[0].name} time=${contacts[0].time} icon=${contacts[0].icon}></contact-component> `;
