/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { map } from '@laufire/utils/collection';
import { React } from 'react';
import { values } from '@laufire/utils/lib';
const Table = (context) => {
	const { state, config } = context;

	console.log(state);
	return (

		<table>
			<tbody>
				<tr>
					{config.studentData.map((val) =>
						<th key={ val }> {val} </th>)}
				</tr>
				{state.studentDetails.map((val, key) =>
					<tr key={ key }>
						{
							values(map(val, (value, Key) =>
								<td key={ Key }>{value}</td>))
						}

					</tr>)}
			</tbody>
		</table>

	);
};

export default Table;
