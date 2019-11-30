import MenuButton from '../button'
import MenuEntry from '../entry'
import MenuHeading from '../heading'
import Container from 'react-bootstrap/Container'
import Level from './levelselect'
import { selectableLevels } from '../../../lib/constants'

export default () => (
  <Container>
    <MenuHeading header="Level-Einstellungen" />
    <MenuEntry>
      <form>
        {selectableLevels.map(level => (
          <Level key={level.key} value={level.key} label={level.label} />
        ))}
      </form>
    </MenuEntry>
    <MenuButton link='./' label='Zurück' />
  </Container>
)