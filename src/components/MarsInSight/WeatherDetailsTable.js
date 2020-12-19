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

const nanTdValue = (number) => {
	return Array(number).fill(0).map((num, id) => <td key={id}>-</td>);
};

const WeatherDetailsTable = ({ weatherData = null }) => {
	let dataRender;
	if (weatherData) {
		dataRender = weatherData.sol_keys.map((key) => {
			return (
				<tr key={key}>
					<td>
						{new Date(
							weatherData[key].First_UTC
						).toLocaleDateString()}
					</td>
					<td>{key}</td>
					{weatherData[key].AT !== undefined ? (
						<>
							<td>{floatTwoPoint(weatherData[key].AT.mx)}</td>
							<td>{floatTwoPoint(weatherData[key].AT.av)}</td>
							<td>{floatTwoPoint(weatherData[key].AT.mn)}</td>
						</>
					) : (
						nanTdValue(3)
					)}
					{weatherData[key].HWS !== undefined ? (
						<>
							<td>{floatTwoPoint(weatherData[key].HWS.mx)}</td>
							<td>{floatTwoPoint(weatherData[key].HWS.av)}</td>
							<td>{floatTwoPoint(weatherData[key].HWS.mn)}</td>
						</>
					) : (
						nanTdValue(3)
					)}
					{weatherData[key].WD.most_common ? (
						<td>{weatherData[key].WD.most_common.compass_point}</td>
					) : (
						nanTdValue(1)
					)}
					{weatherData[key].PRE !== undefined ? (
						<>
							<td>{floatTwoPoint(weatherData[key].PRE.mx)}</td>
							<td>{floatTwoPoint(weatherData[key].PRE.av)}</td>
							<td>{floatTwoPoint(weatherData[key].PRE.mn)}</td>
						</>
					) : (
						nanTdValue(3)
					)}
				</tr>
			);
		});
	} else {
		dataRender = null;
	}
	return (
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
					<tbody>{dataRender}</tbody>
				</table>
			</div>
			<p>
				<i>Note: Sol is Martian Days.</i>
			</p>
		</div>
	);
};

export default WeatherDetailsTable;
