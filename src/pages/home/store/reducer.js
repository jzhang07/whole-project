
import { fromJS } from 'immutable';
import *as constants from './constants';
const defaultState = fromJS({
   topicList: [],
  articleList: [],
recommandLit: [],
articlePage:1,
showScroll: false,
 });
 
 
 export default (state = defaultState, action) =>{
   switch(action.type) {
     case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommandLit:fromJS(action.recommandLit),
       })
    case constants.ADD_LIST:
      return  state.merge({
        articleList : state.get('articleList').concat(action.list),
        articlePage : action.nextPage
      })
      case constants.TOGGLE_SCROLL:
          return  state.set('showScroll', action.show)
       default:
    return state;
   }
  
 }