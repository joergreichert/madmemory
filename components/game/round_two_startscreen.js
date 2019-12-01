import useIndex from '../../lib/hooks/useIndex';
import WordDisplay from './word_display'
import RoundTwo from './round_two'

const RoundTwoStartScreen = ({ level, data, settings, roundOneState }) => {
  const index = useIndex({elementCount: 2, displayTime: settings.displayTime, level})
  if (index[level] === 0) {
    return (
      <WordDisplay
        roundNumber={"2"}
        item={{
          element: "Runde 2",
          description: `Eines der folgenden ${settings.elementCount} Elemente wurde in der ersten Runde schon gezeigt. <br />Finde heraus welches.`
        }} />
    );
  } else {
    return (
      <RoundTwo
        level={level}
        data={data}
        settings={settings}
        roundOneState={roundOneState}
      />
    );
  }
}
export default RoundTwoStartScreen