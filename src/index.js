import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

//router
import { BrowserRouter } from 'react-router-dom';

// import summernote css
import 'react-summernote/dist/react-summernote.css';

// import bootstrap moduels for jQuery
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import store from './store';

window.$ = window.jQuery = $;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
