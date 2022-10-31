import {Container} from './styles';

interface ItemSideBarProps{
  title:string;
}

export default function ItemSideBar({title}: ItemSideBarProps) {
  return (
    <Container>
      <section> {title} </section>
    </Container>
  )
}
