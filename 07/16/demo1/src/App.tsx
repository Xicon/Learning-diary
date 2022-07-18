import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import ShowNetData from './pages/ShowNetData/index'

function App () {
  return (
    <>
      <BrowserRouter>
        <header>

          <ul>
            <li>
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/chart">Charts</Link>
            </li>
          </ul>

        </header>
        <main>
          <Routes>
            <Route path="/chart" element={ <ShowNetData /> }></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App