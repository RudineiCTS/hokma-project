import { Divider } from "../../components/Divider/styles";
import Header from "../../components/Header/header";
import CardItem from '../../components/CardItem';
import { ContainerCardItem, CategoryTitle } from "./styles";

export default function index() {
 
  return (
    <>
       <Header />
        <>
          <CategoryTitle>Professores</CategoryTitle>

          <Divider style={{marginTop:'50px'}}/>
          <ContainerCardItem>
            <CardItem />
            <CardItem />
            <CardItem />

          </ContainerCardItem>
        </>
    </>
  )
}
