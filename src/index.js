import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Grommet } from 'grommet'

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

ReactDOM.render(
  <BrowserRouter>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </BrowserRouter>,
  document.getElementById('root')
);
