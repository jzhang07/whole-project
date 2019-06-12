import React, {PureComponent} from 'react';
import { WriterWrapper,WriterItem } from '../styled';
import {connect} from 'react-redux'


class Writer  extends PureComponent{
   render(){
       return (
           <WriterWrapper> 
               <WriterItem>Writer</WriterItem>
               </WriterWrapper>
       )
   }


}

export default Writer;