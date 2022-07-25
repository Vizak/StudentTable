import { React } from 'react';

const TableButton = (context) =>
	<button
		onClick={ () => context.actions.setTable() }
	>
		GetTable!
	</button>;

export default TableButton;
