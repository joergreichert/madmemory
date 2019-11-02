import React, { useState, useEffect } from 'react';

export default ({value, label}) => {
    const [level, setLevel] = useState('easy'); 
    return (
        <div className="form-check">
            <label>
                <input
                    type="radio"
                    name={value}
                    value={value}
                    checked={level === {value}}
                    onChange={(event) => setLevel(event.target.value)}
                    className="form-check-input"
                />
                {label}
            </label>
        </div>
    )
}