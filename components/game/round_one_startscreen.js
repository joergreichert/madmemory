import { useIndex } from '../../lib/game/useindex';
import ObjectDisplay from './object_display'
import RoundOne from './round_one'
import { useState } from 'react';
import SlidingPane from 'react-sliding-pane';

const RoundOneStartScreen = ({ settings, data }) => {
  const [arePanesOpen, setPanesOpen] = useState(false)
  const index = useIndex({elementCount: 2, displayTime: settings.displayTime})
  console.log("werde ich aufgerufen")
  if (index === 0) {
    return (
      <ObjectDisplay
        roundNumber={"1"}
        word={{
          element: "Runde 1",
          description: `Merke Dir die folgenden ${settings.elementCount} Elemente`
        }} />
    );
  } else if (index == 1) {
    return (
      <div>
        <SlidingPane
          className='sliding-pane-left'
          overlayClassName='sliding-pane-left-overlay'
          isOpen={ arePanesOpen }
        >
          <div>Links</div>
        </SlidingPane>
      </div>
      <div>
      <SlidingPane
        className='sliding-pane-right'
        overlayClassName='sliding-pane-right-overlay'
        isOpen={ arePanesOpen }
      >
        <div>Rechts</div>
      </SlidingPane>
    </div>
  )
  } else {
    return (
      <RoundOne settings={settings} data={data} />
    );
  }
}
export default RoundOneStartScreen