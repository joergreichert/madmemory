import React from 'react';
import Container from 'react-bootstrap/Container'
import { connect, useSelector, useDispatch } from 'react-redux'
import { setLevel } from '../../../lib/actions'
import { EASY_LEVEL } from '../../../lib/constants'

const LevelSelect = ({ value, label }) => {
  const level = useSelector(state => state.settings ? state.settings.selectedLevel : EASY_LEVEL.key)
  const dispatch = useDispatch();
  return (
    <Container className="form-check">
      <label>
        <input
          type="radio"
          name={value}
          value={value}
          checked={level === value}
          onChange={(event) => dispatch(setLevel(event.target.value))}
          className="form-check-input"
        />
        {label}
      </label>
    </Container>
  )
}
export default connect()(LevelSelect)