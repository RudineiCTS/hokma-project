import { Divider } from "../../components/Divider/styles";
import Header from "../../components/Header/header";
import CardItem from '../../components/CardItem';
import { Container, ContainerCardItem } from "./styles";

export default function index() {
 
  return (
    <>
       <Header />
        <Container>
          <h1>Professores</h1>

          <Divider style={{marginTop:'50px'}}/>
          <ContainerCardItem>
            <CardItem />
            <CardItem />
            <CardItem />

          </ContainerCardItem>
        </Container>
    </>
  )
}
