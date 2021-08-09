import { css } from 'lit-element';

export const Styles = css`
  .container{
    border:solid 3px blue;
    border-radius:10px;
    width:350px;
    height:350px;
    text-align:center;
  }
  input{
    width:90%;
    height:30px;
    margin-top:8vh;
    boder-solid 1px silver;
    boder-top:0px;
    border-radius:5px;
  }
  button{
    width:60%;
    height:40px;
    background: #11c676;
    color:#414141;
    border:none;
    border-radius:6px;
    margin-top:8vh;
  }
  button:hover{
    background:#0da35d;
    cursor:pointer;
  }
`;
