import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { setLevel } from '../../../lib/actions'
import { EASY_LEVEL } from '../../../lib/constants'

const LevelSelect = ({ value, label }) => {
  const level = useSelector(state => state.settings ? state.settings.selectedLevel : EASY_LEVEL.key)
  const dispatch = useDispatch();
  return (
    <div className="form-check">
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
    </div>
  )
}
export default connect()(LevelSelect)