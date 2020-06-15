import React from 'react';
import ReactDOM from 'react-dom';

const badAnyCall = a => a;

const result = badAnyCall("");

ReactDOM.render(
    <div>{result}</div>,
    document.getElementById('root')
);