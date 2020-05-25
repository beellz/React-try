import React from 'react';
import ReactDOM from 'react-dom';
import * as Math from "./maths.js"


ReactDOM.render(

  <ul>
    <li>{Math.add(1,2)}</li>
    <li>{Math.subtract(7,3)}</li>
    <li>{Math.mulitply(2,2)}</li>
    <li>{Math.divide(5,2)}</li>
  </ul>

  ,
  document.getElementById('root')
);
