import {gql, useQuery} from '@apollo/client';
import {Result, Space, Spin} from 'antd';

const LoadingComp = () => {
  return (<Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>);
};

const ErrorComp = () => {
  return (<Result
      status="404"
      title="404"
      subTitle="Sorry, Data request failed!"
  />);
};

const ShowBooksComp = ({data}) => {
  return (<>{ data.books.map((item, i) => {
    return (<article key={ item.id + i }>
      { item.name }
      <figure>
        { item.author.name }
        <figcaption>
          { item.author.id }
        </figcaption>
      </figure>
    </article>);
  }) }
  </>);
};

const Layout = () => {
  const GET_ALL = gql`
		query Query{
			books{
				id
				name
				author{
					id
					name
				}
			}
		}
  `;

  const {
    data,
    loading,
    error,
  } = useQuery(GET_ALL);

  if (loading) return (<LoadingComp />);
  if (error) return (<ErrorComp />);
  return (<ShowBooksComp data={ data } />);

};

function App(){
  return (<>
    <Layout />
  </>);
}

export default App;