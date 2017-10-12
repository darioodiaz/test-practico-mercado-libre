import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter/AppRouter.component';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();