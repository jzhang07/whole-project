import axios from 'axios'
import *as constants from './constants';
const changeDetail = (title, content)  =>({
   type:constants.CHANG_DETAIL,
   title,
   content,
})
export const getDetail = (id) =>{
    return (dispatch) =>{
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result.title, result.content))
         }).catch(() =>{ console.log('Error')})
    }
}