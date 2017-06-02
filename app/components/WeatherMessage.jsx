import React from 'react';

var WeatherMessage = ({temp, city}) => {
    return (
        <h4 className="center padTop50">It is {temp}&#8451; in {city}</h4>
    )
};

export default WeatherMessage;