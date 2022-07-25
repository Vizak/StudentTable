
import TableManager from './services/TableManager';

const setTable = (context) => ({
	studentDetails: TableManager.getStudentData(context),
});

const actions = {

	setTable,
};

export default actions;
