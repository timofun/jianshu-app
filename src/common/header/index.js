import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style.js'

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载app</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavSearch></NavSearch>
        </Nav>
        <Addition>
          <Button className='writing'>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header