import {Container, ItemBar} from './styles';

interface ItemSideBarProps{
  title:string;
}

export default function ItemSideBar({title}: ItemSideBarProps) {
  return (
    <Container>
        <ItemBar> {title} </ItemBar>
    </Container>
  )
}
