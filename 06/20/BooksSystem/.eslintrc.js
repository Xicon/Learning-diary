const { getESLintConfig } = require('@iceworks/spec')

// https://www.npmjs.com/package/@iceworks/spec
module.exports = getESLintConfig('react-ts', {
	rules: {
		semi: ['error', 'never'],
		indent: ['error', 'tab'],
	},
})