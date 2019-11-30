import Container from 'react-bootstrap/Container'
import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { selectElement, unselectElement } from '../../../lib/actions'
import { rheinischesWoerterbuch } from '../../../lib/constants'

const ObjectSelect = ({ value, label, sourceURL }) => {
  const elements = useSelector(state => state.settings && state.settings.selectedElements
    ? state.settings.selectedElements : [rheinischesWoerterbuch.key])
  const dispatch = useDispatch();
  const initialState = {}
  elements.forEach(element => initialState[element] = true);
  const [selection, setSelection] = useState(initialState);
  const handleCheckboxEvent = (event) => {
    const checked = event.target.checked
    setSelection({
      ...selection,
      [event.target.value]: checked
    })
    dispatch((elements.indexOf(event.target.value) >= 0)
      ? unselectElement(event.target.value)
      : selectElement(event.target.value)
    )
  }
  return (
    <Container className="form-check">
      <label>
        <input
          key={value}
          type="checkbox"
          name={value}
          value={value}
          checked={selection[value] || false}
          onChange={handleCheckboxEvent}
          className="form-check-input"
        />
        {label} (<a href={sourceURL}>Quelle</a>)
      </label>
    </Container>
  )
}
export default connect()(ObjectSelect)