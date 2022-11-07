import { useState } from 'react';
import {Container, ContainerImage, Title, Content, MoreItem } from './styles';


export default function index() {
  const [isActiveContainer, setActiveContainer] = useState(false);
  return (
    <Container isActiveContainer={isActiveContainer}>
      <ContainerImage>
        <img src="https://gospelminas.com/wp-content/uploads/2022/07/fernandinho-1000x600.jpeg" alt="professor" />
        <Title>Beltrano</Title>
      </ContainerImage>
      <Content>
        <p>
          
       
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ... 
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page ... 
        </p>
      </Content>
        <MoreItem onClick={()=> setActiveContainer(!isActiveContainer)} isActiveContainer={isActiveContainer} >
          see more
        </MoreItem>
    </Container>
  )
}
