import { gql, useQuery } from '@apollo/client'
import { Result, Space, Spin } from 'antd'
import { useRef, useEffect, RefObject } from 'react'

import { Rose } from '@antv/g2plot'

import { IData } from '../../types'

import './index.scss'

const ALL_DATA = gql`
	query get_data {
		data{
			id
			type
			value
		}
	}
`

const useData = () => {
  const {
    data,
    loading,
    error,
  } = useQuery(ALL_DATA)

  if (loading) {
    return <Space size="middle">
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </Space>
  }

  if (error) {
    return <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
    />
  }

  return data.data
}

const ShowNetData = () => {
  const data = useData()

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    const rosePlot = new Rose(ref.current as HTMLDivElement, {
      data,
      xField: 'type',
      yField: 'value',
      seriesField: 'type',
      radius: 0.9,
      // 设置 active 状态样式
      state: {
        active: {
          style: {
            lineWidth: 0,
            fillOpacity: 0.65,
          },
        },
      },
      legend: {
        position: 'bottom',
      },
      interactions: [{ type: 'element-active' }],
    })

    rosePlot.render()

  }, [])

  return (
    <div className="chart" ref={ ref }></div>
  )
}

export default ShowNetData