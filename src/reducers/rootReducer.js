/**
 * Created by yaoxy on 2016/8/2.
 */
import {home} from './home';
import {list} from './list';
import {article} from './article';
import {me} from './me';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({home,list,article,me});
export default rootReducer