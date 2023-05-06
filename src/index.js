import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Shilpa Sinha";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

ReactDOM.render(
<>
<h1>{` Hello, My name is ${fname}`} </h1>
<p>Today's Date is {date} </p>
<p>Current Time is {time}</p>
</>,
document.getElementById('root')); 