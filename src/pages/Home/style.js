/**
 * Created by Administrator on 2018/9/4.
 * function : xxxxx
 */
import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
    margin-bottom: 35px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 240px;
`;

export const TopicWrapper = styled.div`
  margin-bottom: 20px;
`;

export const TopicItem = styled.div`
  display: inline-block;
  margin: 0 18px 18px 0;
  min-height: 32px;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: top;
  overflow: hidden;
	.topic-pic {
		display: inline-block;
		vertical-align: middle;
		width: 32px;
		height: 32px;
	}
	.topic-text {
	  display: inline-block;
    padding: 0 11px 0 6px;
    font-size: 14px;
	}
`;