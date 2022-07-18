import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {
      id: 1,
      book: '幽默',
      uri: 'https://img1.doubanio.com/view/subject/s/public/s34199958.jpg',
    },
    {
      id: 2,
      book: '幽默',
      uri: 'https://img1.doubanio.com/view/subject/s/public/s34199958.jpg',
    },
    {
      id: 3,
      book: '幽默',
      uri: 'https://img1.doubanio.com/view/subject/s/public/s34199958.jpg',
    },
    {
      id: 4,
      book: '幽默',
      uri: 'https://img1.doubanio.com/view/subject/s/public/s34199958.jpg',
    },
    {
      id: 5,
      book: '幽默',
      uri: 'https://img1.doubanio.com/view/subject/s/public/s34199958.jpg',
    },
  ]

}
const bookList = createSlice({
  name: 'bookList',
  initialState,
  reducers: {},
})

export default bookList.reducer