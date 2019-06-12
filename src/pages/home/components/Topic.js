import React, {PureComponent} from 'react';
import { TopicWrapper,TopicItem } from '../styled'
import { connect} from 'react-redux'


class Topic  extends PureComponent{
   render(){
       return (
           <TopicWrapper>
               {
                   this.props.list.map((item)=>{
                       return(
                        <TopicItem key ={item.get('id')}>
                        {item.get('title')}
                        </TopicItem>
                       )
                   })
               }
            
                   </TopicWrapper>
       )
   }


}

const mapStateToProps = (state) =>({
     list: state.getIn(['home','topicList'])
})


export default connect(mapStateToProps,null)(Topic);