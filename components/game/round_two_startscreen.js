import useIndex from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import RoundTwo from './round_two'

const RoundTwoStartScreen = ({ level, data, settings, roundOneState }) => {
  const index = useIndex({elementCount: 2, displayTime: settings.displayTime, level})
  console.log("werde ich aufgerufen")
  if (index[level] === 0) {
    return (
      <ObjectDisplay
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