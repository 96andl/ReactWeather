let React = require('react');


let WeatherMessage = ({temp, location}) => {
    return (
        <h3>It's {temp} in {location}</h3>
    );
};

module.exports = WeatherMessage;