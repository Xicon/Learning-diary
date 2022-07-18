import { useAppDispatch, useAppSelect } from '../index'

import { add, sub } from '../../features/count'

export const Count = () => {
  const count = useAppSelect(state => state.count.value)
  const dispatch = useAppDispatch()

  return <>
    <button onClick={ () => dispatch(add(1)) }>-</button>
    <code>{ count.count }</code>
    <button onClick={ () => dispatch(sub(1)) }>-</button>
  </>
}