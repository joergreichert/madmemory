import { useMemo } from 'react';
import { roundOneObjects } from '../../lib/game/objectstate'
import useIndex from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import RoundTwoStartScreen from './round_two_startscreen'

const RoundOne = ({ level, settings, data }) => {
  const roundOneState = useMemo(() => roundOneObjects({ settings, data }), [level]);
  const roundOne = roundOneState.selected
  const elementCount = roundOne.length
  const index = useIndex({...settings, level})
  if (index[level] < elementCount) {
    return (
      <ObjectDisplay
        level={level}
        roundNumber={1}
        item={roundOne[index[level]]}
        timeout={settings.displayTime}
        itemIndex={index[level]+1}
        totalCount={settings.elementCount}
      />
    );
  } else {
    return (
      <RoundTwoStartScreen
        level={level}
        data={data}
        settings={settings}
        roundOneState={roundOneState}
      />
    );
  }
}
export default RoundOne