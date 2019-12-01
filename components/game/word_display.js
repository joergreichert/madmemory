import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useCountDown from '../../lib/game/useCountDown';
import React, { useRef } from "react";
import { Scrollbar } from  'react-scrollbars-custom'
import useDimension from '../../lib/game/useDimension';
import calcFontSize from '../../lib/game/calcFontSize';
import Stats from './stats';

export default ({ level, roundNumber, item, timeout, itemIndex, totalCount }) => {
  const remainingSeconds = timeout && useCountDown(timeout)
  const targetRef = useRef();
  const dimensions = useDimension(targetRef)
  const potTextBoxHeight = dimensions.height * 0.6
  const textBoxHeight = potTextBoxHeight < 250 ? 250 : potTextBoxHeight
  const targetFontSize = calcFontSize({text: item.element, dimensions});
  return (
    <Container ref={targetRef}>
      <Row>
        <Col xs={12} md={12}>
          <div className="object_display_item">
            <h4 style={{fontSize: targetFontSize}}>{item.element}</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Scrollbar style={{ height: textBoxHeight }}>
            <div className="object_display_description"
              dangerouslySetInnerHTML={{__html: item.description}}
            />
          </Scrollbar>
        </Col>
      </Row>
      { itemIndex && totalCount && remainingSeconds && level && roundNumber &&
        <Stats itemIndex={itemIndex} totalCount={totalCount}
           remainingSeconds={remainingSeconds} level={level}
           roundNumber={roundNumber} />
      }
    </Container>
  );
}