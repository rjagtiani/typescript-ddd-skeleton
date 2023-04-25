/* eslint-disable camelcase */
const common = [
	'--require-module ts-node/register' // Load TypeScript module
];

const app = [
	...common,
	'tests/feature/*.feature',
	'--require tests/feature/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
	app
};
