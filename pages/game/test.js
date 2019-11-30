import Frame from '../../components/frame';
import ObjectDisplay from '../../components/game/object_display'
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
      <ObjectDisplay
        level={1}
        roundNumber={1}
        item={{element: "Modschekiebchen, Modschegiebchen (Mutschegiebchen), Modschekiebchen, Modschegiebchen (Mutschegiebchen)", description: "EineBeschreibung"}}
        timeout={100000000}
        itemIndex={1}
        totalCount={100}
      />
    </Frame>
  );
}
export default connect()(TestPage)