import React from 'react';
import {Link} from 'react-router';

var Examples = (props) => {
    return (
        <div>
            <h1 className="center padBottom20">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?city=Athens'>Athens</Link>
                </li>
                <li>
                    <Link to='/?city=Edinburgh'>Edinburgh</Link>
                </li>
                <li>
                    <Link to='/?city=Rio'>Rio</Link>
                </li>
            </ol>
        </div>
    )
}

export default Examples;