import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import alias from '@rollup/plugin-alias';
import path from 'path'

const projectRootDir = path.resolve(__dirname);


export default defineConfig({
	plugins: [
		alias({
            entries: [
                { 
                    find: '@src',
                    replacement: path.resolve(projectRootDir, 'src')
                }
            ]
        }),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},

});
