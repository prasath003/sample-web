import { css } from 'lit-element';

export const Styles = css`

#container {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #e7dfdc;
    flex-direction: column;
  }
  #header {
    min-height: 60px;
    background-color:  #005e54;
    box-shadow: 2px 0px 4px #ccc;
    display: flex;

    align-items: center;
    margin-right: 0px;
  }
  #body {
      min-height:200px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
    padding: 20px 100px;
    /* overflow: scroll; */
    height:100%;
    
  }
  
  .user-bar {
    height: 55px;
    background:green ;
    color: #fff;
    padding: 0px;
    font-size: 24px;
    position: relative;
    
  }

  .user-bar .actions {
    float: left;
    margin: 0 0 0 20px;
    justify-content:flex-end;
    color:white;
  }
  
  .user-bar .actions.more {
    float:right;
    margin: 0 12px 0 32px;
    color:white;
  }
  
  .user-bar .actions.attachment {
    float:right;
    margin: 0 0 0 30px;
    color:white;
  }
  
  .user-bar .actions.attachment i {
    display: block;
    transform: rotate(-45deg);
  }
  .user-bar .avatar {
    margin: 0 0 0 5px;
    width: 45px;
    height: 45px;
  }
  .user-bar .avatar img {
    border-radius: 50%;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    display: block;width: 100%;
    margin:0%;
    padding:0px;
  }
  .user-bar .name {
    font-size: 17px;
    font-weight: 600; 
    letter-spacing: 0.3px;
    margin: 0 0 0 3px;
    overflow: hidden;
    width: auto;
    text-color:white;
  }
  .user-bar .status {
    display: block;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0;
    width:auto;
  }
  
  
`;
