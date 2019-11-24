import MenuEntry from './button'
import MenuHeading from './heading'

export default () => (
    <div>
        <MenuHeading header="Einstellungen" />
        <MenuEntry link='./settings/level' label='Schwierigkeit' />
        <MenuEntry link='./settings/objectselect' label='Element-Auswahl' />
        <MenuEntry link='../' label='Zurück' />
    </div>
)