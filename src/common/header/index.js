import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';
import { actionCreate } from './store';
import { actioncreator as loginActioncreator } from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoTitleSwitch,
    SearchInfoTitleItem,
    SearchInfoList,
} from './style'

class Header extends Component{
    
    getListArea(){
        const { focused, list, totalPage, page, handleMouseEnter,mouseIn,handleChangePage } =this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length){
            for (let i = (page-1) *10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoTitleItem key={newList[i]}>{newList[i]}</SearchInfoTitleItem>
                  )
            }
        }
        
        if(focused || mouseIn){
            return(
        <SearchInfo onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseEnter}>
            <SearchInfoTitle>
                Hot Search
                <SearchInfoTitleSwitch onClick={() =>handleChangePage (page,totalPage,this.spinIcon)}>
                <span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe61d;</span>
                Switch
                </SearchInfoTitleSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                {pageList}
            </SearchInfoList>
        </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render() {
        const { focused,handleInputFocus,list,login,logout } =this.props;
    return (
        <HeaderWrapper>
            <Link to ='/'>
            <Logo />
            </Link>
            <Nav>
            <Link to='/'><NavItem className='left active'>Home</NavItem></Link>
            <NavItem className='left'>Download</NavItem>
            {
                login? 
                <Link to='/' onClick = {logout}><NavItem className='right'>Logout</NavItem></Link>:
                <Link to='/login'><NavItem className='right'>Login</NavItem></Link>
            }
            
            <NavItem className='right'>
            <span className="iconfont">&#xe636;</span>
            </NavItem>
            <SearchWrapper>
            {/* <label htmlFor ='inputSearch' > search </label> */}
                <CSSTransition
                timeout = {200}
                in={focused}
                classNames='slide'>
        
            <NavSearch
            id= 'inputSearch'
            className={focused ? 'focused':''}
            onFocus = {()=>handleInputFocus(list)}
            onBlur = {handleInputFocus}
            >
            </NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom':'iconfont zoom'} >&#xe637;</span>
            {this.getListArea()}
            </SearchWrapper>
            </Nav> 
            <Addition>
           <Link to='/write'> <Button className= 'writing'><span className="iconfont">&#xe602;</span>Start
           </Button></Link>
                <Button className='reg'>Sign</Button>
            </Addition>
        </HeaderWrapper>
                    )
    }
}

const mapStateToProps = (state) =>{
   return {
    focused: state.getIn(['header','focused']),
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn']),
    login:state.getIn(['login','login']),
    //state.get('header').get('focused')
   }
}
const mapDispatchToProps =(dispatch) =>{
  return {
    handleInputFocus(list){
        if(list.size === 0 ){ dispatch(actionCreate.getList());}
        dispatch(actionCreate.handleFocus());
    },
    handleMouseEnter(){
        dispatch(actionCreate.mouseEnter())
    },
    handleChangePage(page, totalPage, spin){
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        if(originAngle) {
            originAngle = Number(originAngle);
        }else {
            originAngle = 0;
        }
        spin.style.transform =`rotate(${originAngle+360}deg)`;
        if (page<totalPage){
            dispatch(actionCreate.changePage(page+1))
        }
        else {
            dispatch(actionCreate.changePage(1))
        }
        
    },
    logout(){
        dispatch(loginActioncreator.logout())
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);