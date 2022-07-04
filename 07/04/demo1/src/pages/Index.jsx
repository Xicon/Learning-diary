'use strict';

import {gql, useQuery} from '@apollo/client';
import {Alert, Spin} from 'antd';
import styled from 'styled-components';

// 显示从Apollo服务器获取的书籍数据
const ShowBooksLayout = ({data}) => {
  console.log(data);

  return (<ShowBooks>
    <ul>
      { data.books.map((book) => {
        return <li key={ book.id }>
          <figure>
            <img src={ book.uri } alt={ book.name } />
            <p>{ book.name }</p>
            <figcaption>
              <strong>{ book.author.name }</strong>
            </figcaption>
          </figure>
        </li>;
      }) }
    </ul>
  </ShowBooks>);
};

const Index = () => {
  const GET_BOOKS = gql`
		query getAll_Books{
			books{
				id
				name
				uri
				author {
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
  } = useQuery(GET_BOOKS);

  // 加载中
  if (loading) {
    return <>
      <Spin tip="Loading...">
        <Alert
            message="获取数据中..."
            description="正在从Apollo Server服务器获取数据集"
            type="info"
        />
      </Spin>
    </>;
  }

  // 错误提示
  if (error) {
    return <>
      <Alert
          message={ error.message }
          showIcon
          description="error"
          type="error"
      />
    </>;
  }

  return (<>
    <ShowBooksLayout data={ data } />
  </>);
};

// style
const ShowBooks = styled.article`
	ul {
		column-count : 3;

		li {
			width           : 270px;
			height          : 500px;
			list-style-type : none;

			figure {
				img {
					width  : 100%;
					height : 300px;
				}
			}
		}
	}
`;

export default Index;