'use strict';

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'; // router
import styled from 'styled-components'; // Component style
import Index from '../pages/Index';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Home = () => {
  return <>
    <BrowserRouter>
      <Header>
        <Link to="index">首页</Link>
        <Link to="register">注册</Link>
        <Link to="login">登录</Link>
      </Header>

      <Routes>
        <Route path="/" element={ <Index /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  </>;
};

const Header = styled.header`
	width           : 100vw;
	height          : 49px;
	line-height     : 40px;
	display         : flex;
	justify-content : space-evenly;

	a {
		font-size : 20px;
		color     : red;
	}
`;

export default Home;