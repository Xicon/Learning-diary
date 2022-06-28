const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
	lang: 'zh-CN',
	title: '个人简历',
	description: '个人简历',
	base: './',
	theme: defaultTheme({
		// Public 文件路径
		logo: '/images/hero.png',
		//		项目仓库的 URL。
		repo: 'https://github.com/Xicon',
//		项目仓库的标签
		repoLabel: 'Github',

//		侧边栏
		sidebar: {
			'/reference/': [
				{
					text: 'VuePress Reference',
					collapsible: true,
					children: ['/reference/cli.md', '/reference/config.md'],
				},
				{
					text: 'Bundlers Reference',
					collapsible: true,
					children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
				},
			],
		},

		//是否启用 编辑此页 链接
		editLink: false,

		//最近更新时间戳 。
		lastUpdated: true,

//		贡献者列表
		contributors: false,

		//进入 404 页面时，会从数组中随机选取一条信息进行展示。
		notFound: ['404', '404-NotFound'],

		// 返回首页 链接的文字。
		backToHome: '返回首页',

		//切换夜间模式按钮的标题文字。
		toggleDarkMode: '切换至深色模式',

		toggleSidebar: '切换至侧边栏',
	}),

}