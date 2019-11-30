import { useIndex } from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import RoundTwo from './round_two'

const RoundTwoStartScreen = ({ settings, roundOneState }) => {
  const index = useIndex({elementCount: 2, displayTime: settings.displayTime})
  console.log("werde ich aufgerufen")
  if (index === 0) {
    return (
      <ObjectDisplay
        roundNumber={"2"}
        word={{
          element: "Runde 2",
          description: `Eines der folgenden ${settings.elementCount} Elemente wurde in der ersten Runde schon gezeigt. <br />Finde heraus welches.`
        }} />
    );
  } else {
    return (
      <RoundTwo settings={settings} roundOneState={roundOneState} />
    );
  }
}
export default RoundTwoStartScreen