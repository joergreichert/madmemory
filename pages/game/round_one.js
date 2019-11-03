import { data } from '../../data/woerterbuch.json'
import { roundOneObjects, roundTwoObjects } from '../../lib/game/objectstate'
import { useIndex } from '../../lib/game/useindex';
import Frame from '../../components/frame';
import GameRound from '../../components/game/round'
import { connect, useSelector } from 'react-redux'

const GamePage = () => {
    const level = useSelector(state => state.settings ? state.settings.level : 'easy') 
    const roundOneState = roundOneObjects(level, data)
    const roundOne = roundOneState.selected
    const wordCount = roundOne.length
    const roundTwoState = roundTwoObjects(roundOneState)
    const roundTwo = roundTwoState.selected
    const roundOneElement = roundTwoState.duplicate
    const index = useIndex(wordCount)
    return (
        <Frame>
            <GameRound 
                roundOne={roundOne}
                roundOneElement={roundOneElement}
                roundTwo={roundTwo}
                index={index}
            />            
        </Frame>
    );
}
export default connect()(GamePage)