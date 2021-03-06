import Layout from '@/Layouts/BasicLayout'
import { IRouterConfig, lazy } from 'ice'

const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Home = lazy(() => import('@/pages/Home'))
const NotFound = lazy(() => import('@/components/NotFound'))

const routerConfig: IRouterConfig[] = [
	{
		path: '/',
		component: Layout,
		children: [{
			path: '/dashboard',
			component: Dashboard,
		}, {
			path: '/',
			exact: true,
			component: Home,
		}, {
			component: NotFound,
		}],
	},
]

export default routerConfig