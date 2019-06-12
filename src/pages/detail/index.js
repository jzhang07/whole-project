import React, {PureComponent} from 'react';
import { withRouter } from 'react-router-dom'
import {
    DetailWrapper,
    DetailLeft,
    DetailRight,
    Header,
    Content } from './style'
import { actioncreator } from './store'
import { connect } from 'react-redux';
class Detail  extends PureComponent{

   render(){
       return (
           <DetailWrapper>
               <DetailLeft>
                   <Header>{this.props.title}</Header>
                   <Content
                   dangerouslySetInnerHTML={{__html:this.props.content}}>
                       
                   </Content>
                   </DetailLeft>
               <DetailRight></DetailRight>
                    </DetailWrapper>
       )
   }

 componentDidMount(){
     this.props.getDetail(this.props.match.params.id);
 }
};

const mapState=(state) => ({
   title: state.getIn(['detail','title']),
   content: state.getIn(['detail','content'])
});

const mapDispatch = (dispatch) =>({
    getDetail(id) {
       dispatch(actioncreator.getDetail(id))
    }
});

export default  connect(mapState,mapDispatch)(withRouter(Detail));