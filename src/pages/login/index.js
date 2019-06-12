import React, {PureComponent} from 'react';
import { Redirect } from 'react-router-dom';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button,
} from './style'
import *as actioncreator from './store/actioncreator';
import { connect } from 'react-redux';

class Login  extends PureComponent{
   render(){
       const { loginStatus } = this.props;
       if(!loginStatus){
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='account' ref={(input)=>{this.account = input}}></Input>
                    <Input placeholder='password' type='password' ref={(input)=>{this.password = input}}></Input>
                    <Button onClick={() =>this.props.login(this.account, this.password)}>Login</Button>
                    </LoginBox>
 
                </LoginWrapper>
        )
       }
       else{
              return <Redirect to ='/'   />
       }
        
   }

}
const mapState=(state) => ({
   loginStatus: state.getIn(['login','login'])
})
const mapDispatch = (dispatch) =>({
    login(accountElem, passwordElem){
        dispatch(actioncreator.login(accountElem.value,passwordElem.value))
     console.log(accountElem.value,passwordElem.value)
    }
})

export default  connect(mapState,mapDispatch)(Login);