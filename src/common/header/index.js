import React from 'react';
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style.js'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'



class Header extends React.Component {
  getListArea (show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render () {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载app</NavItem>

          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe607;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={400}
              classNames='slide'
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe605;</i>
            {this.getListArea(this.props.focused)}
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
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)