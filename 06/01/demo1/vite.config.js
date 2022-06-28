import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path' // 引入Node,配置别名

export default defineConfig(({ command }) => {
	// 开发环境配置
	if ( command === 'serve' ) {
		return {

			plugins: [react()], resolve: {
				// 别名
				alias: [{ find: '@/', replacement: resolve(__dirname, `src`) + '/' }, // src 目录下
					{ find: '/img', replacement: resolve(__dirname, 'src/assets/images') }, // 图片文件夹
					{ find: '/ico', replacement: resolve(__dirname, 'src/assets/ico/icons') }, // 图标文件夹
				],
			}, extensions: ['.js', '.ts', '.json'], // 引入时忽略的文件扩展名列表

//			// 代理, 解决前端跨域
//			server: {
//				proxy: {
//					// 正则表达式写法
//					'^/api/*': {
//						target: 'http://localhost:4000',
//						changeOrigin: true,
//						rewrite: (path) => path.replace(/^\/fallback/, ''),
//					},
//				},
//			},

		}
	}
})