import { createContext, useContext } from 'react'
import LoginStore from './login.Store'

class RootStore {
	constructor() {
		this.loginStore = new LoginStore()
	}
}

const rootStore = new RootStore()
//const context = useContext(createContext(rootStore))

const IndexStore = () => useContext(createContext(rootStore))
export default IndexStore