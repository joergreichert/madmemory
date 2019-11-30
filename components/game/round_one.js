import { useMemo } from 'react';
import { roundOneObjects } from '../../lib/game/objectstate'
import { useIndex } from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import RoundTwoStartScreen from './round_two_startscreen'

const RoundOne = ({ settings, data }) => {
  const roundOneState = useMemo(() => roundOneObjects({ settings, data }), ["fix"]);
  const roundOne = roundOneState.selected
  const elementCount = roundOne.length
  const index = useIndex(settings)
  if (index < elementCount) {
    return (
      <ObjectDisplay roundNumber={"1"} word={roundOne[index]} />
    );
  } else {
    return (
      <RoundTwoStartScreen settings={settings} roundOneState={roundOneState} />
    );
  }
}
export default RoundOne