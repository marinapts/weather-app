import React from 'react';
import Nav from 'Nav';

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="row padTop100">
                <div className="col s10 offset-s1 m6 offset-m3">
                    <div className="card-panel">
                        {props.children}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;