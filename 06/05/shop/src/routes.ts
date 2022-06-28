import { IRouterConfig, lazy } from 'ice'

const Home = lazy(() => import('@/pages/Home'))
const NotFound = lazy(() => import('@/components/NotFound'))

const routerConfig: IRouterConfig[] = []

export default routerConfig