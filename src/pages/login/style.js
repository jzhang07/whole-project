import styled from 'styled-components';

export  const LoginWrapper = styled.div`
left:0;
right:0;
bottom:0;
top: 56px;
background:#eee;
position: absolute;
z-index:-1;

`;

export  const LoginBox = styled.div`
width:400px;
height: 500px;
margin: 50px auto;
background: #fff;
box-shadow: 0 0 8px rgba(0,0,0,.1);
padding-top:20px;
`;
export  const Input = styled.input`
width: 200px;
display: block;
height:30px;
line-height: 30px;
padding: 0 10px;
color:#777;
margin: 20px auto;
`

export const Button = styled.div`
width:220px;
height: 30px;
font-size : 18px;
line-height: 30px;
color:#fff;
background: #3194d0;
border-radius: 15px;
margin: 10px auto;
text-align: center;
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