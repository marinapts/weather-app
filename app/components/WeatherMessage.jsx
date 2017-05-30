var React = require('react');

var WeatherMessage = ({temp, city}) => {
    return (
        <h4 className="center padTop50">It is {temp}&#8451; in {city}</h4>
    )
};

module.exports = WeatherMessage;