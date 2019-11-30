import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useCountDown from '../../lib/game/useCountDown';
import React, { useRef } from "react";
import { Scrollbar } from  'react-scrollbars-custom'
import useDimension from '../../lib/game/useDimension';
import calcFontSize from '../../lib/game/calcFontSize';

export default ({ level, roundNumber, item, timeout, itemIndex, totalCount }) => {
  const remainingSeconds = timeout && useCountDown(timeout)
  const targetRef = useRef();
  const dimensions = useDimension(targetRef)
  const textBoxHeight = dimensions.height * 0.6 < 100 ? 100 : dimensions.height * 0.6
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
        <Row className={"justify-content-center at-bottom"}>
          <Col xs={3} md={3}>
            <div className={"stats"}>
              <div className={"stats label"}>Etappe</div>
              <div className={"stats value"}>{level}</div>
            </div>
          </Col>
          <Col xs={3} md={3}>
            <div className={"stats"}>
              <div className={"stats label"}>Runde</div>
              <div className={"stats value"}>{roundNumber}</div>
            </div>
          </Col>
          <Col xs={3} md={3}>
            <div className={"stats"}>
              <div className={"stats label"}>Element</div>
              <div className={"stats value"}>{`${itemIndex} von ${totalCount}`}</div>
            </div>
          </Col>
          <Col xs={3} md={3}>
            <div className={"stats"}>
              <div className={"stats label"}>nächstes in</div>
              <div className={"stats value"}>{`${remainingSeconds} s`}</div>
            </div>
          </Col>
        </Row>
      }
    </Container>
  );
}