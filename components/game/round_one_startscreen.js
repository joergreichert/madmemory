import useIndex from '../../lib/hooks/useindex';
import WordDisplay from './word_display'
import RoundOne from './round_one'

const RoundOneStartScreen = ({ level, settings, data }) => {
  const index = useIndex({elementCount: 2, displayTime: 2000, level})
  if (index[level] === 0) {
    return (
      <WordDisplay
        level={"1"}
        item={{
          element: "Runde 1",
          description: `Merke Dir die folgenden ${settings.elementCount} Elemente`
        }} />
    );
  } else {
    return (
      <RoundOne
        level={level}
        settings={settings}
        data={data}
      />
    );
  }
}
export default RoundOneStartScreen