import { values, map } from '@laufire/utils/collection';

let rank = 0;
const TableManager = {
	getStudentData: (context) => TableManager.getUpdatedMarkSheet(context),

	getStudentDetails: ({ config }) => {
		const { markSheets, marks } = config;
		const newData = map(markSheets, ({ student, rollNo }) => ({
			student: student,
			rollNo: rollNo,
			...marks[rollNo],
			total: TableManager.getTotal(marks[rollNo]),
			result: TableManager.getResult(marks[rollNo], config),
		}));

		return newData;
	},
	getTotal: (student) => {
		const { tamil, english, maths, science, social } = student;

		return tamil + english + maths + science + social;
	},
	getResult: (student, config) => (Math.min(...values(student))
	> config.LeastMarks
		? 'PASS'
		: 'FAIL'),

	getUpdatedMarkSheet: (context) => {
		const studentDetails = TableManager.getStudentDetails(context);
		const sortedRecords = studentDetails
			.sort((a, b) => b.total - a.total);

		const updatedMarksheet = sortedRecords.map((markSheet) => ({
			...markSheet,
			rank: TableManager.setRank(markSheet),

		}));

		return updatedMarksheet;
	},
	setRank: (markSheet) => {
		const studentRank = markSheet.result === 'PASS' ? rank += 1 : '-';

		return studentRank;
	},
};

export default TableManager;
