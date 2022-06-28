import { Observable, of, interval, first, fromEvent, takeUntil } from 'rxjs'
// first 只处理第一个数据
const observable1 = interval(1000)
const observer1 = observable1.pipe(first())
observer1.subscribe({
  next: (val) => {
    console.log(val)
  },
})

const observable2 = interval(1000)
const click2 = fromEvent(document.body, 'click')
// const observer2 = observable2.pipe(takeUntil(click2))
observer2.subscribe({
  next(val) {
    console.log(val)
  },
})

function App() {
  return <></>
}

export default App
