import MenuHeading from '../menu/heading'

export default ({ roundNumber, word }) => {
  return (
    <div>
      <MenuHeading header={"Runde " + roundNumber} />
      <div className="object_display">
        <h4>{word.element}</h4>
      </div>
      <div className="object_display">
        <h5>{word.description}</h5>
      </div>
    </div>
  );
}