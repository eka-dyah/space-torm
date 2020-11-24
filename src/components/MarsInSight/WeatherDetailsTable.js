import React from "react";
import { floatTwoPoint } from "../../utils/floatTwoPoint";

const tableHeaderProp = [
	{ name: "Date", colSpan: 2, nameChild: ["Date", "Sol"] },
	{
		name: "Temperature (Celcius)",
		colSpan: 3,
		nameChild: ["Max", "Avg", "Min"],
	},
	{
		name: "Wind Speed (m/s)",
		colSpan: 4,
		nameChild: ["Max", "Avg", "Min", "Direction"],
	},
	{ name: "Pressure (Pa)", colSpan: 3, nameChild: ["Max", "Avg", "Min"] },
];

const WeatherDetailsTable = ({ weatherData }) => (
	<div>
		<div className="table-container">
			<table>
				<thead>
					<tr>
						{tableHeaderProp.map((props, id) => (
							<th key={id} colSpan={props.colSpan}>
								{props.name}
							</th>
						))}
					</tr>
					<tr>
						{tableHeaderProp.map((props) => {
							return props.nameChild.map((name) => (
								<td key={name}>{name}</td>
							));
						})}
					</tr>
				</thead>
				<tbody>
					{weatherData.sol_keys.map((key) => (
						<tr key={key}>
							<td>
								{new Date(
									weatherData[key].First_UTC
								).toLocaleDateString()}
							</td>
							<td>{key}</td>
							<td>{floatTwoPoint(weatherData[key].AT.mx)}</td>
							<td>{floatTwoPoint(weatherData[key].AT.av)}</td>
							<td>{floatTwoPoint(weatherData[key].AT.mn)}</td>
							<td>{floatTwoPoint(weatherData[key].HWS.mx)}</td>
							<td>{floatTwoPoint(weatherData[key].HWS.av)}</td>
							<td>{floatTwoPoint(weatherData[key].HWS.mn)}</td>
							<td>
								{weatherData[key].WD.most_common.compass_point}
							</td>
							<td>{floatTwoPoint(weatherData[key].PRE.mx)}</td>
							<td>{floatTwoPoint(weatherData[key].PRE.av)}</td>
							<td>{floatTwoPoint(weatherData[key].PRE.mn)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
		<p>
			<i>Note: Sol is Martian Days.</i>
		</p>
	</div>
);

export default WeatherDetailsTable;
