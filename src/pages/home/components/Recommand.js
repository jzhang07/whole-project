import React, {PureComponent} from 'react';
import { RecommandWrapper,RecommandItem } from '../styled';
import {connect} from 'react-redux'

class Recommand  extends PureComponent{
   render(){
    const { list } = this.props;
       return (
           <RecommandWrapper >
               {
                   list.map((item) =>{
                       return(
<RecommandItem key = {item.get('id')} imgUrl = {item.get('imgUrl')}></RecommandItem> 
                       )
                   })
               }
               
               </RecommandWrapper>
       )
   }


}
const mapStateToProps= (state) =>({
    list: state.getIn(['home','recommandLit'])
})
export default connect(mapStateToProps,null)(Recommand);