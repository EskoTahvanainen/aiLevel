import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CodeSetMain from './Codesetmain';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CodeSetMain />, 
                document.getElementById('root'));
registerServiceWorker();
