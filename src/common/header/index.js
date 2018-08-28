import React from 'react';
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js'
import { CSSTransition } from 'react-transition-group'

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载app</NavItem>
        <NavItem className='right'>
          <i className="iconfont">&#xe607;</i>
        </NavItem>
        <NavItem className='right'>登录</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={400}
            classNames='slide'
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe605;</i>
        </SearchWrapper>

      </Nav>
      <Addition>
        <Button className='writing'>
          <i className="iconfont">&#xe600;</i>
          写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)