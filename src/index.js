import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Loading from './components/widgets/Loading';
import { BrowserRouter as Router } from 'react-router-dom';

import initialize from './utils/config';

ReactDOM.render(<Loading/>, document.getElementById('root'));

initialize().then(function() {
    ReactDOM.render(
        <Router>
          <React.Fragment>
            <App />
          </React.Fragment>
        </Router>
        , document.getElementById('root'));
});
