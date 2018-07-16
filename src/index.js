import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import Main from './components/Main';
import store from './store';

ReactDOM.render(<Provider store={store}>
  <Main />
</Provider>, document.getElementById('root'));
registerServiceWorker();

