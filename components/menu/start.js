import MenuEntry from './button'

export default () => (
    <div>
        <MenuEntry link='./game/index' label='Spielen' />
        <MenuEntry link='./hiscores' label='Hiscores' />
        <MenuEntry link='./settings' label='Einstellungen' />
    </div>
)