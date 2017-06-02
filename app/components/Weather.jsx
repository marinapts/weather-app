import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends React.Component {
    
    constructor() {
        super();
        this.state = {
            isLoading: false
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(city) {
        var _this = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(city).then(function (temp) {
            _this.setState({
                city: city,
                temp: temp,
                isLoading: false
            });
        }, function (e) {
            _this.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    }

    render() {
        var {isLoading, temp, city, errorMessage} = this.state;

        function renderMessage () {

            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && city) {
                return <WeatherMessage temp={temp} city={city}/>;
            }
        }

        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return (
            <div>
                <h1 className="center padBottom30">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
};

export default Weather;