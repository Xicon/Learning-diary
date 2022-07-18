export interface IData {
  id: number | string
  type: string
  value: number | string
}

export interface IResolver {
  Query: {
    data: () => Array<{
      type: string
      value: number | string
    }>
  }
}