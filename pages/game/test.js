import Frame from '../../components/frame';
import SoundDisplay from '../../components/game/sound_display'
import EvalInput from '../../components/game/eval_input'
import { connect, useSelector } from 'react-redux'

const TestPage = () => {
  const settings = useSelector(state => state.settings ? state.settings : EASY_LEVEL.settings)
  const jsons = settings.objects.map(obj => require(`../../data/${obj}`).data)
  const data = jsons.length > 0 ? jsons[0] : {}
  for (var i = 1; i < jsons.length; i++) {
    jsons[i].forEach(elem => data.push(elem))
  }
  return (
    <Frame>
      { false && <SoundDisplay
        level={1}
        roundNumber={1}
        item={{label: "Modschekiebchen", image: "http://www.workwithsounds.eu/wp-content/uploads/2014/12/Link-bending-machine-300x200.jpg"}}
        timeout={100000000}
        itemIndex={1}
        totalCount={100}
      />}
      { true && <EvalInput
        level={1}
        data={[]}
        settings={{}}
        expected={{element: "A"}}
        roundOne={[{element: "A"}, {element: "B"}]}
        roundTwo={[{element: "A"}, {element: "C"}]}
      />}
    </Frame>
  );
}
export default connect()(TestPage)