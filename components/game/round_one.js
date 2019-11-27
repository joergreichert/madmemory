import { useMemo } from 'react';
import { roundOneObjects } from '../../lib/game/objectstate'
import { useIndex } from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import RoundTwo from './round_two'

const RoundOne = ({ settings, data }) => {
  const roundOneState = useMemo(() => roundOneObjects({ settings, data }), ["fix"]);
  const roundOne = roundOneState.selected
  const wordCount = roundOne.length
  const index = useIndex(settings)
  if (index < wordCount) {
    return (
      <ObjectDisplay roundNumber={"1"} word={roundOne[index]} />
    );
  } else {
    return (
      <RoundTwo settings={settings} roundOneState={roundOneState} />
    );
  }
}
export default RoundOne