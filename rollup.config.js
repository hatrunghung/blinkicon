import multi from '@rollup/plugin-multi-entry'
import babel from '@rollup/plugin-babel'
import filesize from 'rollup-plugin-filesize'

const formats = ['esm', 'umd'] // cjs?

export default {
	input: ['src/16/index.js', 'src/24/index.js'],
	output: formats.map(format => ({
		file: `dist/index.${format}.js`,
		format,
		name: 'blinkicon',
		globals: {
			'@babel/runtime/helpers/extends': '_extends',
			'@babel/runtime/helpers/objectWithoutProperties': '_objectWithoutProperties',
			'react': 'React'
		}
	})),
	external: [/@babel\/runtime/, 'react'],
	plugins: [
		multi(),
		babel({
			babelHelpers: 'runtime',
			plugins: ["@babel/plugin-transform-runtime"]
		}),
		filesize()
	]
}