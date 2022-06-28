import { useWindowScroll } from './hooks/useWindowScroll'

function App() {
  return (
      <>
        <div style={ { height: '12000px' } }>{ useWindowScroll() }</div>
      </>
  )
}

export default App