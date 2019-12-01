import { useMemo } from 'react';
import { roundOneObjects } from '../../lib/game/objectstate'
import useIndex from '../../lib/hooks/useindex';
import WordDisplay from './word_display'
import SoundDisplay from './sound_display'
import RoundTwoStartScreen from './round_two_startscreen'

const RoundOne = ({ level, settings, data }) => {
  const roundOneState = useMemo(() => roundOneObjects({ settings, data }), [level]);
  const roundOne = roundOneState.selected
  const elementCount = roundOne.length
  const index = useIndex({...settings, level})
  const idx = index[level]
  if (idx < elementCount) {
    const config = {
      item: roundOne[idx],
      itemIndex: idx+1,
      level,
      roundNumber: 1,
      timeout: settings.displayTime,
      totalCount: settings.elementCount,
    }
    if (config.item.sound) {
      return (<SoundDisplay {...config} />);
    } else {
      return (<WordDisplay {...config} />);
    }
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