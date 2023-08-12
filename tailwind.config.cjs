import { join } from 'path'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	safelist: [
		{
			pattern: /(col|row)-span-*/,
		},
	],
	theme: {
		extend: {},
	},
	plugins: [...skeleton()],
}
