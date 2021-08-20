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
  .message {
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    color: #767676;
    flex-direction: column;
  }
  .message .messageContent {
    background-color: white;
    border-radius: 5px;
    padding: 10px;
  }
  /* .message {
  flex-direction: column;
  display: flex;
  align-items: flex-start;
} */
  .message.me .messageContent {
    background-color: #dcf7c5;
    align-items: flex-end;
  }

  #footer {
    min-height: 67px;
    background-color: #f0eeed;
    display: flex;
  }
  #smileyIcon {
    flex-basis: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #textarea {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  #ta {
    width: 100%;
    height: 45px;
    border: 0px;
    border-radius: 4px;
    resize: none;
    outline: none;
    padding: 14px;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  #micIcon {
    flex-basis: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #micIcon img,
  #smileyIcon img {
    max-width: 60%;
    cursor: pointer;
  }
`;