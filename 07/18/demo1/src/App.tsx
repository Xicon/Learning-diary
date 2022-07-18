import { FC, useState, useReducer, Reducer, ChangeEventHandler, ChangeEvent } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type ActionType = {
  type: 'plus' | 'sub'
}

const reducer: Reducer<number, ActionType> = (state, action) => {
  switch (action.type) {
    case 'plus':
      return state += 1
    case 'sub':
      return state -= 1
    default:
      return state
  }
}

interface IPerson {
  name: string
  id: number
  age: number
}

type INewPerson = Pick<IPerson, 'age'>

type IGender = 'women' | 'man' | 'unknown'
type XiaoMing = { gender: IGender, adder: string }
type XiaoHong = IPerson & XiaoMing

const xiaohong: XiaoHong = {
  id: 1,
  age: 18,
  name: '12',
  gender: 'man',
  adder: 'ad',
}

interface IPerson2 {
  name: string
  id: number
  age: number
}

type XiaoWang = 'adder' | 'gender'
const xiaoWang: Record<XiaoWang, IPerson2> = {
  gender: {
    name: 'as',
    age: 19,
    id: 1,
  },
  adder: {
    name: 'as',
    age: 19,
    id: 1,
  },
}
type IPerson3 = 'name' | 'age' | 'id'
type IPerson4 = Omit<IPerson2, 'name' | 'age'>
type IPerson5 = Exclude<IPerson3, 'age'>
const xiaoLi: IPerson4 = {
  id: 1,
}
//const xiaoZhang: IPerson5 = 'age'

type Gender = 'women' | 'man' | 'unknown'
type newGender = Exclude<Gender, 'unknown'>
const gender1: newGender = 'women' // ok
const gender2: newGender = 'man' // ok
//const gender3: newGender = 'unknown' // error

interface Person {
  age: number
  name: string
}

type Xm = Omit<Person, 'age'>
const xm: Xm = {
  name: 'ad',
}

function App () {
  const initialState: number = 0
  const [count, setCount] = useReducer(reducer, initialState)
  const [data, setData] = useState<string>('')

  const onChangeHandle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setData(e.currentTarget.value)
  }

  return (
    <>
      <button onClick={ () => setCount({ type: 'plus' }) }>+</button>
      <code>{ count }</code>
      <button onClick={ () => setCount({ type: 'sub' }) }>-</button>
      <code>{ data }</code>
      <label htmlFor="">
        <input type="text" name="" id="" onChange={ (e: ChangeEvent<HTMLInputElement>) => {
          console.log(e.currentTarget.value)
          setData(e.currentTarget.value)
        } } />
      </label>
      <label htmlFor="">
        <input type="text" name="" id="" onChange={ (e: ChangeEvent<HTMLInputElement>) => onChangeHandle(e) } />
      </label>
    </>
  )
}

export default App