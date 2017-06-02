import React from 'react';

class WeatherForm extends React.Component {
    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();

        var city = this.refs.city.value;

        if (city.length > 0) {
            this.refs.city.value = '';
            this.props.onSearch(city);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="city" placeholder="Enter city name"/>
                    </div>
                    <div>
                        <button className="btn waves-effect waves-light">Get Weather</button>
                    </div>
                </form> 
            </div>
        );
    }
};

export default WeatherForm;