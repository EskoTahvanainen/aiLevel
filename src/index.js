import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CodeSetMain from './Codesetmain';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<CodeSetMain />, 
                document.getElementById('root'));
registerServiceWorker();
