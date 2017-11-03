import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	
	render() {
			return (
				<table className="table table-hover">
					<thead>
						<tr>
							<th> City </th>
							<th> Temperature </th>
							<th> Pressure </th>
							<th> Humidity </th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderList)}
					</tbody>
				</table>
			);
	}

	renderList(cityData) {
		const name = cityData.city.name;
		const temp = cityData.list.map(t => t.main.temp);
		const pressure = cityData.list.map(t => t.main.pressure);
		const humidity = cityData.list.map(t => t.main.humidity);
		const { lat, lon } = cityData.city.coord;
		return (
			<tr key={name}>
				<td><GoogleMap lat={lat} lng={lon}/></td>
				<td><Chart data={temp} color="orange" /></td>
				<td><Chart data={pressure} color="blue" /></td>
				<td><Chart data={humidity} color="green" /></td>
			</tr>
		);
	}
}


function mapStateToProps( {weather} ) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);

