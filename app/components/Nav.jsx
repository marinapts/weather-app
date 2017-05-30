import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        alert('Not yet wired up!');
    },

    render: function () {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">Weather Application</a>
                    <a href="/" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                        <li><Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                    </ul>

                    <ul className="side-nav" id="mobile-demo">
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                        <li><Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
});

module.exports = Nav;

