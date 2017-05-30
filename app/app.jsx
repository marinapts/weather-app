import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// Load foundation
require('style!css!materialize-css/dist/css/materialize.min.css')
// $(document).foundation();

//App css
require('style!css!applicationStyles');
require('style!css!sass!spaces');


ReactDOM.render( 
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
  document.getElementById('app')
);
