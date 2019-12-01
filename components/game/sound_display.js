import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useCountDown from '../../lib/hooks/useCountDown';
import React, { useRef } from "react";
import useDimension from '../../lib/hooks/useDimension';
import useAudio from '../../lib/hooks/useAudio';
import Image from 'react-image'
import Stats from './stats';

export default ({ level, roundNumber, item, timeout, itemIndex, totalCount }) => {
  const remainingSeconds = timeout && useCountDown(timeout)
  useAudio({url: item.sound, itemIndex, totalCount, timeout});
  const targetRef = useRef();
  const dimensions = useDimension(targetRef)
  const getImageHeight = screenHeight => {
    const potImageHeight = screenHeight * 0.6
    return potImageHeight < 100 ? 100 : potImageHeight
  }
  return (
    <Container ref={targetRef}>
      <Row>
        <Col xs={12} md={12}>
          <div className={"object_display_item"}>
            <Image src={[item.image]} height={getImageHeight(dimensions.height)} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
            <div className="object_display_description">{item.label}</div>
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