import { useMemo } from 'react';
import { roundTwoObjects } from '../../lib/game/objectstate'
import useIndex from '../../lib/hooks/useindex';
import WordDisplay from './word_display'
import SoundDisplay from './sound_display'
import EvalInput from './eval_input'

const RoundTwo = ({ level, data, settings, roundOneState }) => {
  const roundTwoState = useMemo(() => roundTwoObjects(roundOneState), [roundOneState]);
  const roundTwo = roundTwoState.selected
  const elementCount = settings.elementCount
  const roundOneElement = roundTwoState.duplicate
  const index = useIndex({...settings, level})
  const idx = index[level]
  if (idx < elementCount) {
    const config = {
      item: roundTwo[idx],
      itemIndex: idx+1,
      level,
      roundNumber: 2,
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