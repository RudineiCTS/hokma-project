import ItemSideBar from '../ItemSideBar';
import {Container, Icon, ContainerItem} from './styles'
interface SideBarProps {
  isActiveSidebar:boolean;
  closeSideBar: ()=>void;

}

export function SideBar({isActiveSidebar, closeSideBar}: SideBarProps) {
  return (
    <Container isActiveSidebar={isActiveSidebar}>
      <button onClick={closeSideBar}>
        <Icon color='#ED3E3E'/>
      </button>
      <ContainerItem>
        <ItemSideBar title='Professores'/>
        <ItemSideBar title='Alunos'/>
        <ItemSideBar title='Espaço'/>
        <ItemSideBar title='Como participar ?'/>
      </ContainerItem>
    </Container>
  )
}
