import React from 'react'

import { from } from 'rxjs'
import { Input, Layout, Table } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import 'antd/dist/antd.css'

const { Search } = Input
const { Header, Content, Footer } = Layout

interface ResType {
  code: number
  data: [
    Array<{ key: string; name: string; age: number; address: string }>[],
    Array<{ title: string; dataIndex: string; key: number | string }>[]
  ]
}

class App extends React.Component {
  state = {
    columns: [],
    dataSource: [],
  }

  onSearch = (value: any) => console.log(value)

  getData = from(
    new Promise<ResType>(async (resolve, reject) => {
      try {
        resolve((await fetch('http://localhost:4000/api/data')).json())
      } catch (e) {
        reject(e)
      }
    })
      .then((res) => res.data)
      .catch((err) => console.error(err))
  )

  componentDidMount() {
    this.getData.subscribe({
      next: (value) => {
        this.setState({
          dataSource: value[0],
          columns: value[1],
        })
      },
      error: (err) => console.error(err),
      complete: () => console.log('async end'),
    })
  }

  render() {
    return (
      <>
        <Layout>
          <Header>
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={this.onSearch}
            />
          </Header>

          <Content>
            <Table
              dataSource={this.state.dataSource}
              columns={this.state.columns}
            />
          </Content>
        </Layout>
      </>
    )
  }
}

export default App
