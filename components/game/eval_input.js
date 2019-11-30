import { moveRandomSelectionToTarget } from '../../lib/game/objectstate'
import MenuHeading from '../menu/heading'
import MenuEntry from '../menu/entry'
import MenuButton from '../menu/button'
import Box from '../menu/box'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default ({ expected, roundOne, roundTwo }) => {
  const set = new Set(roundOne.map(entry => entry.element));
  roundTwo.forEach(elem => set.add(elem.element));
  const shuffled = moveRandomSelectionToTarget([...set], set.size).selected
  let hasSelected = false

  const selectWord = (selectedElem) => {
    if (hasSelected) {
      return
    }
    hasSelected = true
    const expectedId = "word-" + shuffled.indexOf(expected.element)
    document.getElementById(expectedId).style.background = "green"
    if (selectedElem != expected.element) {
      const wrongId = "word-" + shuffled.indexOf(selectedElem)
      document.getElementById(wrongId).style.background = "red"
    }
    document.getElementById("nav").style.visibility = "visible"
  };
  return (
    <div>
      <MenuHeading header={"Klicke auf das Wort, welches doppelt vorkam"} />
      <MenuEntry>
        <div>
          <Row>
            {shuffled.map(elem => (
              <Col xs={6} md={4} key={"col-" + shuffled.indexOf(elem)}>
                <div
                  id={"word-" + shuffled.indexOf(elem)}
                  className={"box"}
                  onClick={() => selectWord(elem)}
                >
                  <Box label={elem} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </MenuEntry>
      <div id={"nav"} style={{ visibility: 'hidden' }}>
        <MenuButton link='../index' label='Hauptmenü' />
      </div>
    </div>
  );
}