import { useState } from 'react';
import Header from './components/Header/header';
import Main from './components/Main';
import '../styles/global.css';

function App() {
  const [isOpenHamburguer,setIsOpenHamburguer] = useState(false);

  function HandleSetIsOpenHamburguer(){
    setIsOpenHamburguer(!isOpenHamburguer);
  }

  return (
    <>
      <Header  />
        <Main/>
    </>
  )
}

export default App
