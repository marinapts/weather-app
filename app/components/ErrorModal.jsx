import React from 'react';

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error'
        };
    },

    propTypes : {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },

    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },

    render: function () {
        var {title, message} = this.props;
        
        return (
            <div className="center" id="error-modal" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <button className="btn" data-close="">OK</button>
            </div>
        );
    }
}); 

module.exports = ErrorModal;