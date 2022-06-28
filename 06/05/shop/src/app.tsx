import { IAppConfig, runApp } from 'ice'

const appConfig: IAppConfig = {
	app: {
		rootId: 'App',
	},
	router: {
		type: 'hash',
	},
}

runApp(appConfig)