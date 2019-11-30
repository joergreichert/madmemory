import { useMemo } from 'react';
import { roundTwoObjects } from '../../lib/game/objectstate'
import useIndex from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import EvalInput from './eval_input'

const RoundTwo = ({ level, data, settings, roundOneState }) => {
  const roundTwoState = useMemo(() => roundTwoObjects(roundOneState), [roundOneState]);
  const roundTwo = roundTwoState.selected
  const elementCount = settings.elementCount
  const roundOneElement = roundTwoState.duplicate
  const index = useIndex({...settings, level})
  if (index[level] < elementCount) {
    return (
      <ObjectDisplay
        level={level}
        roundNumber={2}
        item={roundTwo[index[level]]}
        timeout={settings.displayTime}
        itemIndex={index[level]+1}
        totalCount={settings.elementCount}
      />
    );
  } else {
    return (
      <EvalInput
        level={level}
        data={data}
        settings={settings}
        expected={roundOneElement}
        roundOne={roundOneState.selected}
        roundTwo={roundTwo}
      />
    );
  }
}
export default RoundTwo