import React from 'react';

class ErrorModal extends React.Component {

    componentDidMount() {
        $('#error-modal').toggleClass('hide');
    }

    render() {
        var {title, message} = this.props;
        
        return (
            <div className="center hide" id="error-modal" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <button className="btn" data-close="">OK</button>
            </div>
        );
    }
}; 

ErrorModal.defaultProps = {
    title: 'Error'
};

ErrorModal.propTypes = {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
};

export default ErrorModal;