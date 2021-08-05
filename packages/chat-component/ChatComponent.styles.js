import { css } from 'lit-element';

export const styles = css`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    width: 450px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
    background-color: rgb(45, 9, 247);
  }
  .body {
    flex: 1;
    color: white;
    background-color: #e7dfdc;
    padding: 20px 30px;
  }

  .footer form {
    display: flex;
  }
  form input {
    flex: 1;
    height: 40px;
    border: none;
    outline: none;
    padding-left: 5px;
    font-size: 16px;
  }
  form button {
    width: 100px;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
  }
  form button:hover {
    background-color: blue;
    transition: 0.2s ease;
  }
`;
