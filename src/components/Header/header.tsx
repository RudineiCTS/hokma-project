import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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


function Header() {
  const [isOpenHamburguer,setIsOpenHamburguer] = useState(false);
  const navigation = useNavigate();
  return (
    <>
  
    <Container>
      <MenuHamburguer 
        isOpenHamburguer={isOpenHamburguer} 
        openHamburguerMenu={()=>{setIsOpenHamburguer(!isOpenHamburguer)}} />
        
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
            <button onClick={()=>{ navigation('/teachers') }}>
              Professores
            </button>
          </section>
          <section>
            <button>
              Alunos
            </button>
          </section>
          <section>
            <button>
              Espaço  
            </button>
          </section>
          <section>
            <button>
              Como participar?
            </button>
          </section>
        </ContainerCategory>

    </Container>
    </>
   
  )
}

export default Header;  
