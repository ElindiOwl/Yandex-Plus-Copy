import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://elindiowl.github.io/Yandex-Plus-Copy',
	plugins: [react()],
	resolve: {
		alias: {
			src: '/src',
		},
	},
});
