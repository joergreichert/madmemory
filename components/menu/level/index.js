import MenuButton from '../button'
import MenuEntry from '../entry'
import MenuHeading from '../heading'
import Level from './levelselect'
import { selectableLevels } from '../../../lib/constants'

export default () => (
  <div>
    <MenuHeading header="Level-Einstellungen" />
    <MenuEntry>
      <form>
        {selectableLevels.map(level => (
          <Level key={level.key} value={level.key} label={level.label} />
        ))}
      </form>
    </MenuEntry>
    <MenuButton link='./' label='Zurück' />
  </div>
)