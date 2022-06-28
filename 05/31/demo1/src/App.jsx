import { Observable, never, of, from, empty, timer } from 'rxjs'

const map = (list, callback) => {
	return new Observable((observer) => {
		return list.subscribe(val => {
			try {
				observer.next(callback(val))
			}
			catch (e) {
				observer.error(e)
			}
		}, err => {
			console.error(err)
		}, () => {
			observer.complete()
		})
	})
}
const list2 = [2, 3]
const list3 = [2, 3]

// of 参数类型: 基本类型
const result1 = map(of(1, 2), (item) => item + 1)

// form 参数类型: 阵列 序列 可迭代的对象
const result2 = map(from(list2), (item) => item + 1)

const promise = from(
		new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve('yes')
					}, 3000)
				},
		),
)

const result3 = map(from(list3), (item) => item + 1)

const result4 = map(from('输出序列'), (item) => item)

result1.subscribe(console.log)
result2.subscribe(console.log)
result3.subscribe(console.log)
result4.subscribe(console.log)
promise.subscribe({
			next: (value) => {
				console.log(value)
			},
			error: (error) => {
				console.error(error)
			},
			complete: () => {
				console.log('end')
			},
		},
)

const result5 = () => {
	
}

function App() {
	return (<>

	</>)
}

export default App