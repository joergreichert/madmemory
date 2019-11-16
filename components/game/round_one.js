import { useMemo } from 'react';
import { roundOneObjects } from '../../lib/game/objectstate'
import { useIndex } from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import RoundTwo from './round_two'

const RoundOne = ({level, data}) => {
    const roundOneState = useMemo(() => roundOneObjects(level, data), ["fix"]);
    const roundOne = roundOneState.selected
    const wordCount = roundOne.length
    const index = useIndex("roundOne", wordCount)
    if (index < wordCount) {
        return (
            <ObjectDisplay roundNumber={"1"} word={roundOne[index]} />
        );
    } else {
        return (
            <RoundTwo roundOneState={roundOneState} />
        );
    }
}
export default RoundOne