import React, {PureComponent} from 'react';
import { ListItem,ListInfo,LoadMore } from '../styled'
import { connect }  from 'react-redux';
import { actioncreator } from '../store';
import { Link } from 'react-router-dom';

class List  extends PureComponent{
   render(){
       const { list,getMoreList,page } = this.props;
       return (
<div>
{
    list.map((item)=>{
        return(
        <Link key = {item.get('id')} to={'/detail/' + item.get('id')}>
        <ListItem >
        <img className='list-pic' src={item.get('imgUrl')} alt='120' />
        <ListInfo>
        <h3 className ='title'>{item.get('title')}</h3>
        <p className = 'dsc'>{item.get('dsc')}</p>
           </ListInfo>
           </ListItem>
           </Link>
                    )
                })
            }
            <LoadMore onClick={() =>getMoreList(page)}>More</LoadMore>
           </div>
       )
   }


}
const mapStateToProps = (state) =>({
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
       dispatch(actioncreator.getMoreList(page))
    }
})
export default connect(mapStateToProps,mapDispatch)(List);