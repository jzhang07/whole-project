import React, {PureComponent} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommand from './components/Recommand';
import Writer from './components/Writer';
import { actioncreator } from './store'
import {connect} from 'react-redux'
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './styled'


class Home  extends PureComponent{

    handleTop(){
        window.scrollTo(0,0)
    }
   render(){
       return (
           <HomeWrapper>
               <HomeLeft>
               <img className= 'banner-img' src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
               <Topic />
               <List />
                   </HomeLeft>
               <HomeRight>
                    <Recommand />
                    <Writer />
                    </HomeRight>
                    { this.props.showScroll ? <BackTop onClick={this.handleTop}>BackTop</BackTop>:null}

                </HomeWrapper>
       )
   }
   componentDidMount(){
       this.props.changeHomeData();
       this.bindEvents();
   }
   componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScroll)
   }
   bindEvents() {
       window.addEventListener('scroll', this.props.changeScroll)
   }
}
const mapState = (state)=> ({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) =>({
    changeHomeData(){
       dispatch(actioncreator.getHomeInfo())
    },
    changeScroll(e){
        if (document.documentElement.scrollTop > 100){
            dispatch(actioncreator.toggleTopShow(true))
        }
        else {
            dispatch(actioncreator.toggleTopShow(false))
        }
    }
})
export default connect(mapState, mapDispatch)(Home);