import { useMemo } from 'react';
import { roundOneObjects } from '../../lib/game/objectstate'
import useIndex from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import RoundTwoStartScreen from './round_two_startscreen'

const RoundOne = ({ settings, data }) => {
  const roundOneState = useMemo(() => roundOneObjects({ settings, data }), ["fix"]);
  const roundOne = roundOneState.selected
  const elementCount = roundOne.length
  const index = useIndex(settings)
  if (index < elementCount) {
    return (
      <ObjectDisplay
        level={1}
        roundNumber={1}
        item={roundOne[index]}
        timeout={settings.displayTime}
        itemIndex={index+1}
        totalCount={settings.elementCount}
      />
    );
  } else {
    return (
      <RoundTwoStartScreen settings={settings} roundOneState={roundOneState} />
    );
  }
}
export default RoundOne