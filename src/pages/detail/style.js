import styled from 'styled-components';

export  const DetailWrapper = styled.div`
width: 960px;
margin:0 auto;
overflow: hidden;
`;

export  const DetailLeft = styled.div`
margin-left: 15px;
padding-top: 30px;
width: 625px;
float: left;
.banner-img {
    width: 625px;
    height: 270px;
}
`;
export  const DetailRight = styled.div`
width: 280px;
float: right;

`

export const Header = styled.div`
margin : 50px 0 20px 0;
font-size : 34px;
line-height: 44px;
font-weight: bold;
`

export const Content = styled.div`
color: ##2f2f2f;
img {
  width: 100%;  
}
p{
  margin: 25px 0;
  font-size: 16px;
  line-height:32px;
}
`