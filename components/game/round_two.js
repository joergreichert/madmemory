import { roundTwoObjects } from '../../lib/game/objectstate'
import { useIndex } from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import EvalInput from './eval_input'

const RoundTwo = ({roundOneState}) => {
    const roundTwoState = roundTwoObjects(roundOneState)
    const roundTwo = roundTwoState.selected
    const wordCount = roundTwo.length
    const roundOneElement = roundTwoState.duplicate
    const index = useIndex("roundTwo", wordCount)
    if (index < wordCount) {
        return (
            <ObjectDisplay roundNumber={"2"} word={roundTwo[index]} />            
        );    
    } else {
        return (
            <EvalInput expected={roundOneElement} roundOne={roundOneState.selected} roundTwo={roundTwo} />
        );    
    }
}
export default RoundTwo