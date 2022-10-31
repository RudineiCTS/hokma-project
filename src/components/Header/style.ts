import styled from 'styled-components';

export const Title = styled.h1`
font-family: 'Akshar', sans-serif;
font-size: 2.5rem;
`

export const Image = styled.img`
width: 250px;
height:auto;

@media(max-width:1080 ){
  width: 150px;
  height:auto;
}
`
export const Container = styled.div`
display:flex;
align-items:center ;
justify-content:space-between;
padding-right: 10px;
padding-left:10px;
margin: 75px  50px 0 50px;
`


export const Content = styled.div`
display:flex;
align-items:center ;

  h5{
    font-family: 'Akshar', sans-serif;
    font-weight:400;
    font-size: 1.5rem;
  }
`
export const ContentTitle = styled.div`
margin-left:25px;
`

export const ContainerCategory = styled.div`
display:flex;
padding-bottom:70px;
margin-right:56px;
  section{
    padding: 0 40px;
    a{
      font-family: 'Akshar', sans-serif;
      font-size: 1.25rem;
      font-weight:400;
    }
  }

  @media(max-width:1080px ){
  display: none;
}

`

