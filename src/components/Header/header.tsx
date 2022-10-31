import hokmaImg from '../../assets/logo-hokma.png';

import {
  Title, 
  Container, 
  Image, 
  ContentTitle, 
  ContainerCategory,
  Content,
} from './style';

function Header() {
  return (
    <>
  
    <Container>

      <Content>
          <Image src={hokmaImg} alt="Escola Hokma" />
          <ContentTitle>
            <Title>
              ESCOLA HOKMA
            </Title>
            <h5>
              Criados para Criar
            </h5>
          </ContentTitle>
      </Content>

        <ContainerCategory>
          <section>
            <a href="">
              Professores
            </a>
          </section>
          <section>
            <a href="">
              Alunos
            </a>
          </section>
          <section>
            <a href="">
              Espaço  
            </a>
          </section>
          <section>
            <a href="">
              Como participar?
            </a>
          </section>
        </ContainerCategory>

    </Container>
    </>
   
  )
}

export default Header;  
