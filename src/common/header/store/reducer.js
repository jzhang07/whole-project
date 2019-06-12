import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list:[],
    page: 1,
    totalPage: 1,
 });
 
 
 export default (state = defaultState, action) =>{
   switch(action.type) {
    case actionTypes.FOCUSE:
            return state.set('focused',!state.get('focused'));
    case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',!state.get('mouseIn'));
    case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
    case actionTypes.CHANGE_LIST:
          return state.merge({
            list:action.data,
            totalPage:action.totalPage,
          })
   default:
   return state;
   }
   
 }