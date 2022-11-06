import styled from 'styled-components';


export const Container= styled.div`
width: 320px;
height: 420px;

max-width: 320px;
max-height: 420px;

background: linear-gradient(180deg, #641F34 0%,#BB3939 100%);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 18px;
`

export const ContainerImage= styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
margin-top:30px;
  img{
    border-radius: 120px;
    width:109px;
    height:110px;
  }
`

export const Title= styled.h1`
margin-top:12px;
  font-family: 'Akshar', sans-serif;
`

export const Content= styled.div`
margin:0 30px 0 30px;
text-align:center;


p{
  text-overflow:ellipsis ;
  overflow:hidden;
}
`