let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let {getTemp} = require('openWeatherMap');

let Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        this.setState({isLoading: true});
        getTemp(location).then(({data}) => {
            let location = data.name;
            let temp = data.main.temp;
            this.setState({location, temp, isLoading: false});
        }).catch((error) => {
            this.setState({isLoading: false});
            console.log(error);
        });
    },
    render() {
        let renderMessage = () => {
            if (isLoading) return <div>Fetching weather...</div>;
            else return (
                <WeatherMessage temp={temp} location={location}/>
            );
        };
        let {isLoading, temp, location} = this.state;

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;