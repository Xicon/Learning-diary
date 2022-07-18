import { FC, Component, useRef, useState, Dispatch, SetStateAction, FormEvent } from 'react'

interface IProps {
  data: number | string
}

const CompA = (props: IProps) => {
  const { data } = props

  return <>
    { data }
  </>
}

// 动态Props
const CompB = <P extends { data: number }> (props: P) => {
  return <>{ props?.data }</>
}

class CompC extends Component<IProps, any> {
  render () {
    return <>this is CompC { this.props.data }</>
  }
}

const CompD: FC<IProps> = (props) => {
  return <>this is CompD { props.data }</>
}

// 子传递父组件: 父组件传递修改状态的函数给子组件,子组件通过该函数来进行修改父组件的状态
const CompE = (props: { childSetCount: Dispatch<SetStateAction<string | number>> }) => {
  const inp = useRef<HTMLInputElement | null>(null)
  const [input, setInput] = useState<string | number>('')

  return <>
    <code>{ input }</code>
    <label htmlFor="">
      <input type="text" name="" id="" onChange={ (e) => props.childSetCount(e.target.value) } />
    </label>

  </>
}

interface IFormData {
  name: string
  username: string
  password: string
}

// 动态State
const CompF = () => {
  const [usr, setUsr] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [formData, setFormData] = useState<IFormData>({
    name: 'CompF',
  } as IFormData)

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormData(Object.assign(formData, {
      username: usr,
      password: pass,
    }))
  }

  return <>
    <code>{ formData.name }</code>
    <code>{ formData.username }</code>
    <code>{ formData.password }</code>

    <form action="" onSubmit={ (e) => submitHandle(e) }>
      <label htmlFor="usr">
        <input type="text" name="usr" id="usr" onChange={ (e) => setUsr(e.target.value) } />
      </label>
      <label htmlFor="passwd">
        <input type="password" name="passwd" id="passwd" onChange={ (e) => setPass(e.target.value) } />
      </label>
      <label>
        <input type="submit" />
      </label>
    </form>
  </>
}

function App () {
  const [count, setCount] = useState<number | string>(0)
  const [data] = useState(20)
  const [state] = useState<any | null>()

  return (
    <>
      { count }
      <CompA data={ data } />
      <CompB data={ data } />
      <CompC data={ state } />
      <CompD data={ count } />
      <CompE childSetCount={ setCount } />
      <CompF />
    </>
  )
}

export default App