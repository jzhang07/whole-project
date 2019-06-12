import styled from 'styled-components';

export  const HomeWrapper = styled.div`
width: 960px;
margin:0 auto;
overflow: hidden;
`;

export  const HomeLeft = styled.div`
margin-left: 15px;
padding-top: 30px;
width: 625px;
float: left;
.banner-img {
    width: 625px;
    height: 270px;
}
`;
export  const HomeRight = styled.div`
width: 280px;
float: right;

`
export  const TopicWrapper = styled.div`
padding: 20px 0 10px 0;
background: #F7F7F7;
overflow: hidden;
margin-left: -10px;
margin-bottom:18px;
border-bottom: 1px solid #dcdcdc;
`
export  const TopicItem = styled.div`
padding-right: 10px;
background: #F7F7F7;
float: left;
height: 32px;
line-height: 32px;
font-size: 14px;
color:black;
border: 1px solid #dcdcdc;
border-radius: 4px;
margin-left: 18px;

`
export  const ListItem = styled.div`
padding: 20px 0;
overflow:hidden;
border-bottom:1px solid #dcdcdc;
cursor: pointer;
.list-pic{
    width: 125px;
    display:block;
    float:right;
    height:100px;
    border-radius:10px;
}

`
export  const ListInfo = styled.div`
width: 500px;
float: left;
.title{
    font-size: 18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
}
.dsc{
    font-size:13px;
    line-height:24px;
    color:#999;
}

`
export const RecommandWrapper= styled.div` 
margin: 30px 0;
width:280px;
`;

export const RecommandItem= styled.div` 
width: 280px;
height: 50px;
background :url(${(props) => props.imgUrl});
background-size: contain;
magrin: 6px;
cursor: pointer;
`
export const WriterWrapper= styled.div` 
width:278px;
border: 1px solid #dcdcdc;
border-radius: 3px;
height:300px;
line-height: 300px;
text-align: center;
`;

export const WriterItem= styled.div` 
width: 280px;
height: 50px;
background :url(${(props) => props.imgUrl});
background-size: contain;
magrin: 6px;
cursor: pointer;
`
export const LoadMore = styled.div`
width: 100%;
height: 40px;
line-height: 40px;
background: #a5a5a5;
text-align: center;
border-radius:20px;
color:#fff;
margin: 30px 0;
cursor: pointer;
`
export const BackTop = styled.div`
position : fixed;
right: 100px;
bottom: 10px;
width: 60px;
height: 60px;
line-height: 60px;
text-align: center;
border: 1px solid #ccc;
font-size: 12px;
cursor: pointer;
`