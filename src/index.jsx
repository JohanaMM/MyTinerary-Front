import React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider} from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import MyItinerary from './MyItinerary';
import reportWebVitals from './reportWebVitals';
import '@mui/material/styles';


ReactDOM.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <MyItinerary />
    </StyledEngineProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

