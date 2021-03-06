import Frame from '../../components/frame';
import RoundOneStartScreen from '../../components/game/round_one_startscreen'
import { connect, useSelector } from 'react-redux'
import { EASY_LEVEL } from '../../lib/constants'

const WordsGame = () => {
  const settings = useSelector(state => state.settings ? state.settings : EASY_LEVEL.settings)
  const jsons = settings.objects.map(obj => require(`../../data/${obj}`).data)
  const data = jsons.length > 0 ? jsons[0] : {}
  for (var i = 1; i < jsons.length; i++) {
    jsons[i].forEach(elem => data.push(elem))
  }
  return (
    <Frame>
      <RoundOneStartScreen
        level={1}
        settings={settings}
        data={data}
      />
    </Frame>
  );
}
export default connect()(WordsGame)