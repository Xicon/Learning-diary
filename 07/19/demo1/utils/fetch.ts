interface IFetchError {
  status: 'error'
  message: string
}

const Fetch = <T> (uri: string = 'http://localhost:4000/api/newsList', options: RequestInit = {}): Promise<T> | IFetchError => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(uri, options)
    options.method = options.method ?? 'GET'
    options.headers = options.headers ?? {}
    ;(options.headers! as Record<string, string>)['Content-Type'] = (options.headers! as Record<string, string>)['Content-Type'] ?? 'application/json'

    if (response.ok) {
      resolve(response as unknown as T)
    }
    else {
      reject(response.statusText)
    }
  })
}

export default Fetch