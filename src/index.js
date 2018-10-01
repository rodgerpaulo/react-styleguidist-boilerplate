import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import ScreensRoot from 'javascripts/screens/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <ScreensRoot />
  </BrowserRouter>,
  document.getElementById('app-root')
);
registerServiceWorker();
