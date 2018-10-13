import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{ file: pkg.main, format: 'umd', name: 'devalue' },
		{ file: pkg.module, format: 'es' }
	],
	plugins: [
		typescript({
			typescript: require('typescript')
		})
	]
};
