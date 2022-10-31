import { FaTimes } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

interface PropContainer{
  isActiveSidebar: boolean;
}

const showSidebar  = keyframes`
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
`;

export const Container = styled.div<PropContainer>`
position:fixed;
right:0;
top:0px ;
width: 25%;
height:100%;
background:#101010 ;
box-shadow: 2px;
animation: ${showSidebar} .4s;

  button{
    display:flex;
    position:fixed;
    right:10px;
    top:15px;
  }


display:${props => props.isActiveSidebar ? 'flex' : 'none'};
`

const ButtonAniation = keyframes`
from{
  font-size:30px;
}
to{
  font-size:35px;
}
`


export const Icon = styled(FaTimes)`
    position:fixed;
    right:10px;
    top:15px;
    font-size:30px;
    animation: ${ButtonAniation} 4s;
` 