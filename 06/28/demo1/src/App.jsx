import store from './store'

function App() {
  console.log(store)

  const count = store.getState()

  const sub = () => {
    return {
      type: 'count/sub',
    }
  }
  const add = () => {
    return {
      type: 'count/add',
    }
  }

  store.dispatch(sub())
  store.dispatch(add())

  return (
    <>
      <button onClick={sub}>sub</button>
      <strong>{count.value}</strong>
      <button onClick={add}>plus</button>
    </>
  )
}

export default App
