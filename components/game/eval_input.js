import Container from 'react-bootstrap/Container'
import { moveRandomSelectionToTarget } from '../../lib/game/objectstate'
import MenuHeading from '../menu/heading'
import MenuEntry from '../menu/entry'
import MenuButton from '../menu/button'
import Box from '../menu/box'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useMemo, useRef } from 'react';
import RoundOne from './round_one'
import useDimension from '../../lib/game/useDimension';
import { Scrollbar } from  'react-scrollbars-custom'
import Emoji from 'a11y-react-emoji'

export default ({ level, data, settings, expected, roundOne, roundTwo }) => {
  const [actual, setActual] = useState()
  const [advanceToNextLevel, setAdvanceToNextLevel] = useState(false)
  const itemLabel = item => item.element ? item.element : item.label
  const shuffled = useMemo(() => {
    const set = new Set(roundOne.map(entry => itemLabel(entry)));
    roundTwo.forEach(elem => set.add(itemLabel(elem)));
    return moveRandomSelectionToTarget([...set], set.size).selected
  }, [roundTwo])
  const targetRef = useRef();
  const dimensions = useDimension(targetRef)

  const isCorrectSelection = (elem) => itemLabel(expected) === elem
  const selectionState = (elem) => {
    if (actual) {
      const correctSelection = isCorrectSelection(elem)
      if (actual === elem) {
        return correctSelection ? "selection-correct" : "selection-wrong"
      } else if (correctSelection) {
        return "selection-correct"
      }
    }
    return "";
  }
  if (advanceToNextLevel) {
    return <RoundOne
      level={level+1}
      settings={{...settings,
        elementCount: settings.elementCount + (level * 5)
      }}
      data={data}
    />
  }
  const selectionListHeight = dimensions.height * 0.6 < 250 ? 250 : dimensions.height * 0.6
  return (
    <Container ref={targetRef}>
      <MenuHeading header={"Klicke auf das Element, welches doppelt vorkam"} />
      <Scrollbar style={{height: selectionListHeight }}>
        <MenuEntry>
          <div>
            <Row>
              {shuffled.map(elem => (
                <Col xs={12} md={4} key={"col-" + shuffled.indexOf(elem)}>
                  <div
                    id={"word-" + shuffled.indexOf(elem)}
                    className={"box " + selectionState(elem) }
                    onClick={() => setActual(elem)}
                  >
                    <Box label={elem} />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </MenuEntry>
      </Scrollbar>
      { actual && !isCorrectSelection(actual) && <div>
        <div className={"selection-wrong-text"}>
          Deine Erinnerung hat Dir einen Streich gespielt <Emoji symbol="🙈" label="see-no-evil monkey" />
        </div>
        <MenuButton link='../index' label='Hauptmenü' />
      </div>}
      { actual && isCorrectSelection(actual) && <div
        className={"box"}
        onClick={() => setAdvanceToNextLevel(true)}
      >
        <div className={"selection-correct-text"}>
          Du hast Dich richtig erinnert! <Emoji symbol="🧐" label="face with monocle" />
        </div>
        <MenuEntry>
          <Box label={"Auf zur nächsten Etappe"} />
        </MenuEntry>
      </div>}
    </Container>
  );
}