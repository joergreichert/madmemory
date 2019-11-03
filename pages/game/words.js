import { data } from '../../data/woerterbuch.json'
import Frame from '../../components/frame';
import RoundOne from '../../components/game/round_one'
import { connect, useSelector } from 'react-redux'

const WordsGame = () => {
    const level = useSelector(state => state.settings ? state.settings.level : 'easy') 
    return (
        <Frame>
            <RoundOne level={level} data={data} />
        </Frame>
    );    
}
export default connect()(WordsGame)