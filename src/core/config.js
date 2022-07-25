const config = {
	count: 1,
	markSheets: [
		{
			student: 'Vishnu',
			rollNo: 19,
		},
		{
			student: 'Megha',
			rollNo: 16,
		},
		{
			student: 'Kavya',
			rollNo: 18,
		},
		{
			student: 'mani',
			rollNo: 20,
		},
	],
	marks: {
		19: {
			tamil: 80,
			english: 90,
			science: 86,
			maths: 97,
			social: 76,

		},
		16: {
			tamil: 90,
			english: 97,
			science: 100,
			maths: 34,
			social: 96,

		},
		18: {
			tamil: 60,
			english: 90,
			science: 63,
			maths: 93,
			social: 46,

		},
		20: {
			tamil: 79,
			english: 80,
			science: 91,
			maths: 93,
			social: 86,

		},
	},
	studentData: ['Name',
		'RollNo',
		'tamil',
		'english',
		'science',
		'maths',
		'social',
		'total',
		'result',
		'rank'],
};

export default config;
