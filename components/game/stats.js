import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default ({ level, roundNumber, remainingSeconds, itemIndex, totalCount }) => {
  return (
    <Row className={"justify-content-center at-bottom"}>
        <Col xs={3} md={3}>
        <div className={"stats"}>
            <div className={"label"}>Etappe</div>
            <div className={"value"}>{level}</div>
        </div>
        </Col>
        <Col xs={3} md={3}>
        <div className={"stats"}>
            <div className={"label"}>Runde</div>
            <div className={"value"}>{roundNumber}</div>
        </div>
        </Col>
        <Col xs={3} md={3}>
        <div className={"stats"}>
            <div className={"label"}>Element</div>
            <div className={"value"}>{`${itemIndex}/${totalCount}`}</div>
        </div>
        </Col>
        <Col xs={3} md={3}>
        <div className={"stats"}>
            <div className={"label"}>nächstes</div>
            <div className={"value"}>{`${remainingSeconds} s`}</div>
        </div>
        </Col>
    </Row>
  );
}