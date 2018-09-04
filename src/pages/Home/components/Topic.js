/**
 * Created by Administrator on 2018/9/4.
 * function : xxxxx
 */
import React from 'react'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends React.Component {
  render () {
    return (
      <TopicWrapper>
        <TopicItem>
          <img className='topic-pic' src="//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt=""/>
          <div className='topic-text'>自然科普</div>
        </TopicItem>
      </TopicWrapper>
    )
  }
}

export default Topic