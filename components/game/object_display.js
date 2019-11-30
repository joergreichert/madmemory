import useCountDown from '../../lib/game/useCountDown';

export default ({ level, roundNumber, item, timeout, itemIndex, totalCount }) => {
  const remainingSeconds = timeout && useCountDown(timeout)
  return (
    <div>
      { itemIndex && totalCount && <div>
        {`${itemIndex} / ${totalCount}`}
      </div> }
      { remainingSeconds && <div>
        {`${remainingSeconds} s`}
      </div> }
      { level && <div className="level_display">
        {`Etappe ${level}`}
      </div>}
      { roundNumber && <div className="roundNumber_display">
        {`Runde ${roundNumber}`}
      </div>}
      <div className="item_display">
        {item.element}
      </div>
      <div className="description_display">
        <h5 dangerouslySetInnerHTML={{__html: item.description}}></h5>
      </div>
    </div>
  );
}