import {FaBars} from 'react-icons/fa'
import {SideBar} from '../SideBar/index';

import {ContainerMenuHamburger} from './style'

interface MenuHamburguerProps{
  isOpenHamburguer:boolean;
  openHamburguerMenu: () => void;
}

function MenuHamburguer({isOpenHamburguer, openHamburguerMenu}:MenuHamburguerProps){
  return(
    <>
    <ContainerMenuHamburger >
      <button onClick={openHamburguerMenu}>
        <FaBars size={30} color='#fff'/>
      </button>
      <SideBar isActiveSidebar={isOpenHamburguer} closeSideBar={openHamburguerMenu}/>

    </ContainerMenuHamburger>
    
    </>
  )
}
export default MenuHamburguer;