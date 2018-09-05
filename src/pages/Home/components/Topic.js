/**
 * Created by Administrator on 2018/9/4.
 * function : xxxxx
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    console.log(list)
    return (
      <TopicWrapper>
        {
          list.map((item) => (
            <TopicItem key={item.get('id')}>
              <img
                className='topic-pic'
                src={item.get('imgUrl')}
                alt=''
              />
              <div className='topic-text'>{item.get('title')}</div>
            </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);