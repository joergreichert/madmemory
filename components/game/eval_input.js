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

export default ({ level, data, settings, expected, roundOne, roundTwo }) => {
  const [actual, setActual] = useState()
  const [advanceToNextLevel, setAdvanceToNextLevel] = useState(false)
  const shuffled = useMemo(() => {
    const set = new Set(roundOne.map(entry => entry.element));
    roundTwo.forEach(elem => set.add(elem.element));
    return moveRandomSelectionToTarget([...set], set.size).selected
  }, [roundTwo])
  const targetRef = useRef();
  const dimensions = useDimension(targetRef)

  const selectionState = (elem) => {
    if (actual) {
      if (actual === elem) {
        return expected.element === actual ? "correct-selection" : "wrong-selection"
      } else if (expected.element === elem) {
        return "correct-selection"
      }
    }
    return "";
  }
  if (advanceToNextLevel) {
    return <RoundOne
      level={level+1}
      settings={{...settings,
        elementCount: settings.elementCount + (level + 5)
      }}
      data={data}
    />
  }
  const selectionListHeight = dimensions.height * 0.6 < 150 ? 150 : dimensions.height * 0.6
  return (
    <Container ref={targetRef}>
      <MenuHeading header={"Klicke auf das Wort, welches doppelt vorkam"} />
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
      { actual && expected.element !== actual && <div>
        <MenuButton link='../index' label='Hauptmenü' />
      </div>}
      { actual && expected.element === actual && <div
        className={"box"}
        onClick={() => setAdvanceToNextLevel(true)}
      >
        <Box label={"Auf zur nächsten Etappe"} />
      </div>}
    </Container>
  );
}