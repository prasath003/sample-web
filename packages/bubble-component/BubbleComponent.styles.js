import { css } from 'lit-element';

export const styles = css`
  #container {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #e7dfdc;
    flex-direction: column;
  }
  #header {
    min-height: 67px;
    background-color: #eeeeee;
    box-shadow: 2px 0px 4px #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    padding: 20px 50px;
    overflow: scroll;
  }
`;
