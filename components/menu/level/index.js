import MenuEntry from '../entry'
import Level from './levelselect'

export default () => (
    <div>
        <form>
            <Level value='easy' label='Einfach' />
            <Level value='medium' label='Mittel' />
            <Level value='hard' label='Schwer' />

            <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                    Save
                </button>
            </div>
        </form>
        <MenuEntry link='./' label='Zurück' />
    </div>
)