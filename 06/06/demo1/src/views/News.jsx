import { Outlet, useNavigate } from 'react-router-dom'

export const News = () => {
  const navigate = useNavigate()

  const toggleHot = () => {
    return navigate('/news/hot')
  }

  const toggleCurrent = () => {
    return navigate('/news/current')
  }

  return (
      <>
        this is News
        <button onClick={ toggleHot }>跳转到热门页面</button>
        <button onClick={ toggleCurrent }>跳转到时事新闻</button>
        <Outlet></Outlet>
      </>
  )
}