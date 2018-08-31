/**
 * Created by Administrator on 2018/8/30.
 * function : xxxxx
 */
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const handleMouseEnter = () => ({
  type: actionTypes.HANDLE_MOUSE_ENTER
})

export const handleMouseLeave = () => ({
  type: actionTypes.HANDLE_MOUSE_LEAVE
})

export const handleChangePage = (page) => ({
  type: actionTypes.HANDLE_CHANGE_PAGE,
  page
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      if (res.data.success === true) {
        dispatch(changeList(res.data.data))
      }
    }).catch(() => {
      console.log('请求失败')
    })
  }
}