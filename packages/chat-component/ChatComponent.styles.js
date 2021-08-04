import { css } from 'lit-element';

export const styles = css`
  .con {
    width: 350px;
    height: 550px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #head {
    width: 100%;
    height: 50px;
    background-color: #0077fb;
  }
  #body {
    width: 100%;
    height: 450px;
    overflow-y: auto;
    background-color: hsl(88deg 94% 86%);
  }
  #btm {
    width: 100%;
    height: 50px;
    background-color: #0077fb;
  }
  #text {
    width: 95%;
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 50px;
    margin-top: 7px;
    margin-left: 10px;
  }

  #user1 {
    padding: 10px;
    float: left;
    margin: 5px;
    max-width: 90%;
    display: table;
    clear: both;
    margin-left: 15px;
    background-color: #edefed;
    border-radius: 10px;
  }
  #user2 {
    padding: 10px;
    float: right;
    max-width: 70%;
    background-color: hsl(88deg 94% 86%);
    border-radius: 10px;
    margin: 5px;
    color: black;
    margin-right: 15px;
    display: table;
    clear: both;
  }
`;
