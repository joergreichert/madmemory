import { useMemo } from 'react';
import { roundTwoObjects } from '../../lib/game/objectstate'
import { useIndex } from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import EvalInput from './eval_input'

const RoundTwo = ({ settings, roundOneState }) => {
  const roundTwoState = useMemo(() => roundTwoObjects(roundOneState), [roundOneState]);
  const roundTwo = roundTwoState.selected
  const elementCount = settings.elementCount
  const roundOneElement = roundTwoState.duplicate
  const index = useIndex(settings)
  if (index < elementCount) {
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