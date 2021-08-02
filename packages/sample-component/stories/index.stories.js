import { html } from 'lit-element';
import '../../../__element-definitions/sample-component.js';

export default {
  title: 'SampleComponent',
  component: 'sample-component',
};
const data = [{
 	"name": "Mukesh Ambani",
 	"icon": "",
 	"msg": "Bhai Thode Paise Chahiye The..."
 }];
export const Demo = () => html` <sample-component items=${data}></sample-component> `;
