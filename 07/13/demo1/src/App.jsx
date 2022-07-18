import React, { Children } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

class Comp extends React.Component {
  componentDidMount() {
    console.log(this.props.result.usr)
    console.log(this.props.result.pass)
  }
  render() {
    return (
      <>
        <p>{this.props.result.usr}</p>
        <p>{this.props.result.pass}</p>
      </>
    )
  }
}

class App extends React.Component {
  state = {
    value: 1,
    usr: '1',
    pass: '2',
    result: {
      usr: ' this.usr',
      pass: 'this.pass',
    },
  }

  submitHandle = (e) => {
    e.preventDefault()
    this.setState({
      result: {
        usr: this.state.usr,
        pass: this.state.pass,
      },
    })
  }

  render() {
    return (
      <>
        <form action="" onSubmit={(e) => this.submitHandle(e)}>
          <label htmlFor="">
            usr
            <input
              type="text"
              name=""
              onChange={(e) => {
                this.setState({ usr: e.target.value })
              }}
              id=""
            />
          </label>
          <label htmlFor="">
            pass
            <input
              type="text"
              name=""
              onChange={(e) => this.setState({ pass: e.target.value })}
              id=""
            />
          </label>
          <label htmlFor="">
            <input type="submit" name="" id="" />
          </label>
        </form>

        <BrowserRouter>
          <Link to="/fo">Fo</Link>
          <Routes>
            <Route
              path="/fo"
              element={<Comp result={this.state.result}></Comp>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App
