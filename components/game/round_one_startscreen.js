import useIndex from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import RoundOne from './round_one'

const RoundOneStartScreen = ({ settings, data }) => {
  const index = useIndex({elementCount: 2, displayTime: 2000})
  if (index === 0) {
    return (
      <ObjectDisplay
        roundNumber={"1"}
        item={{
          element: "Runde 1",
          description: `Merke Dir die folgenden ${settings.elementCount} Elemente`
        }} />
    );
  } else {
    return (
      <RoundOne settings={settings} data={data} />
    );
  }
}
export default RoundOneStartScreen