import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
  return <div>
    <p> 
      <h1> Assalam o Aliakum <strong>HaMza!</strong> </h1>
      < h2>Qualifications</h2>
      <div>
        <ol>
          <li> BSIT </li>
          <li>BOOTCAMP 2020</li>
          <li> Artificial Intelligence </li>
        </ol>
      </div>
      <h3>Hobbies</h3>
      <div>
        <ul>
          <li>Ertugrul</li>
          <li>Krulus Osman</li>
          <li>Sanjar</li>
          <li>Software developing</li>
        </ul>
      </div>
    </p> 
  </div>;
}

ReactDOM.render(<Hi />, document.querySelector('#root'));