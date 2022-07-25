import { React } from 'react';
import './App.scss';
import Table from './components/Table';
import TableButton from './components/TableButton';
import context from './core/context';
const App = ({ state: { count }}) =>
	<div className="App" role="App">
		<div>{Table(context)}</div>
		<div>{TableButton(context)}</div>
		<div>Count: { count }</div>
	</div>;

export default App;
