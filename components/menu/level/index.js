import MenuButton from '../button'
import MenuEntry from '../entry'
import MenuHeading from '../heading'
import Level from './levelselect'

export default () => (
    <div>
        <MenuHeading header="Level-Einstellungen" />
        <MenuEntry>
            <form>
                <Level value='easy' label='Einfach' />
                <Level value='medium' label='Mittel' />
                <Level value='hard' label='Schwer' />
            </form>
        </MenuEntry>
        <MenuButton link='./' label='Zurück' />
    </div>
)