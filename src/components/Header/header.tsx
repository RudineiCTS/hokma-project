import hokmaImg from '../../assets/logo-hokma.png';
import MenuHamburguer from '../MenuHamburguer';

import {
  Title, 
  Container, 
  Image, 
  ContentTitle, 
  ContainerCategory,
  Content,
} from './style';

interface HeaderProps {
  isOpenHamburguer:boolean;
  openHamburguerMenu: () => void;
}

function Header({isOpenHamburguer,openHamburguerMenu }: HeaderProps) {
  return (
    <>
  
    <Container>
      <MenuHamburguer 
        isOpenHamburguer={isOpenHamburguer} 
        openHamburguerMenu={openHamburguerMenu} />
        
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
