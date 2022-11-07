import styled, { keyframes } from 'styled-components';


interface ContainerProps{
  isActiveContainer: boolean;
}

const ContainerAnimationIfActive = keyframes`
to{
  width: 350px;
  height:auto ;
}
`

export const Container= styled.div<ContainerProps>`
display:flex;
flex-direction:column ;
width: 320px;
height: 420px;

background: linear-gradient(180deg, #641F34 0%,#BB3939 100%);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 18px;

animation: ${props => props.isActiveContainer ? ContainerAnimationIfActive : ""} .4s both;

margin-bottom:25px;
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
display:flex ;
width:auto;
height: 100%;

margin:0 30px 0 30px;
text-align:center;
overflow-y: hidden;
margin-bottom: 12px;
text-overflow: ellipsis;

p{
  text-overflow: ellipsis;
}

`
export const MoreItem = styled.button<ContainerProps>`
text-align:center;
margin-bottom:5px;
border:none;
background:none;
color:#fff ;
opacity:${props => props.isActiveContainer ? '0%'  : '100%' } ;
`

