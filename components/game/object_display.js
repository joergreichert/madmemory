import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useCountDown from '../../lib/game/useCountDown';
import React, { useRef, useEffect, useLayoutEffect, useState } from "react";

export default ({ level, roundNumber, item, timeout, itemIndex, totalCount }) => {
  const remainingSeconds = timeout && useCountDown(timeout)
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });
  let resizeTimer = null;
  const resetTimeout = 100;
  const refreshDimensions = () => {
    if (targetRef.current) {
      const { offsetWidth, offsetHeight } = targetRef.current
      setDimensions({width: offsetWidth, height: offsetHeight})
    }
  }
  useLayoutEffect(() => {
    refreshDimensions();
  }, [])
  useEffect(() => {
    window.addEventListener('resize', () => {
      clearInterval(resizeTimer);
      resizeTimer = setTimeout(refreshDimensions, resetTimeout);
    });
  }, []);
  const textLen = item.element ? item.element.length : 0
  const fontSizePx = 12
  const fontSizePxMax = 72
  const letterCountFactor = 6
  const currentSize = textLen * letterCountFactor
  const fontSizeFactor = 2 / Math.log1p(textLen)
  let targetFontSize = fontSizePx;
  let counter = 1
  while (currentSize + (counter * currentSize * fontSizeFactor) < dimensions.width) {
    counter++
    if (targetFontSize >= fontSizePxMax) {
      break;
    }
    targetFontSize += counter
  }
  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <div className="object_display_item">
            <h4 style={{fontSize: targetFontSize}}>{item.element}</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
        <div ref={targetRef}>
      <p>width: {dimensions.width}</p>
      <p>height: {dimensions.height}</p>
    </div>
          <div className="object_display_description"
            dangerouslySetInnerHTML={{__html: item.description}}
          />
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