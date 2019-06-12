import * as actionTypes from './actionTypes'
import  { fromJS } from 'immutable';
import axios from 'axios'

const changeList = (data) =>({
    type:actionTypes.CHANGE_LIST,
    data:fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export  const handleFocus = () =>({
    type: actionTypes.FOCUSE
})
export const changePage = (page) =>({
    type: actionTypes.CHANGE_PAGE,
    page
})
export const mouseEnter = ()=>({
    type: actionTypes.MOUSE_ENTER
})
export  const getList = () =>{
   return (dispatch) => {
       axios.get('/api/headerList.json')
       .then((res)=>{
           const data = res.data;
           dispatch(changeList(data.data));
       })
       .catch(()=>{
           console.log('gg')
       })
   }

}

