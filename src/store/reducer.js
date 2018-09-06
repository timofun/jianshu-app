/**
 * Created by Administrator on 2018/8/28.
 * function : xxxxx
 */
import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import { reducer as homeReducer } from '../pages/Home/store';
import { reducer as detailReducer } from '../pages/Detail/store';
import { reducer as loginReducer } from '../pages/login/store';

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})