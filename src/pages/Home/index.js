/**
 * Created by Administrator on 2018/9/3.
 * function : xxxxx
 */
import React from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import { HomeWrapper, HomeLeft, HomeRight } from './style'

class Home extends React.Component {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4422/6e78633bc7864050a21749bf6cfbb00834a2ade7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home;