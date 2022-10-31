import { useState } from 'react';
import '../styles/global.css';
import Header from './components/Header/header';
import MenuHamburguer from './components/MenuHamburguer';

function App() {
  const [isOpenHamburguer,setIsOpenHamburguer] = useState(false);

  function HandleSetIsOpenHamburguer(){
    setIsOpenHamburguer(!isOpenHamburguer);
  }

  return (
    <>
      <Header isOpenHamburguer={isOpenHamburguer}
        openHamburguerMenu={HandleSetIsOpenHamburguer} />
    </>
  )
}

export default App
