import Container from 'react-bootstrap/Container'
import MenuButton from '../button'
import MenuEntry from '../entry'
import MenuHeading from '../heading'
import ObjectSelect from './objectselect'
import { selectableElements } from '../../../lib/constants'

export default () => (
  <Container>
    <MenuHeading header="Objekt-Auswahl" />
    <MenuEntry>
      <form>
        {selectableElements.map(elem => (
          <ObjectSelect key={elem.key} value={elem.key}
            label={elem.source.label} sourceURL={elem.source.url} />
        ))}
      </form>
    </MenuEntry>
    <MenuButton link='/settings' label='Zurück' />
  </Container>
)