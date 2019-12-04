import Container from 'react-bootstrap/Container'
import MenuEntry from './button'

export default () => (
  <Container>
    <MenuEntry link='/game/words' label='Spielen' />
    <MenuEntry link='/settings' label='Einstellungen' />
  </Container>
)