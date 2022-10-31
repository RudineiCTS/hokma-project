import {Container, Icon} from './styles'
import {FaTimes} from 'react-icons/fa'
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
    </Container>
  )
}
