export const SET_LEVEL = 'SET_LEVEL'
export const SELECT_ELEMENT = 'SELECT_ELEMENT'
export const UNSELECT_ELEMENT = 'UNSELECT_ELEMENT'
export const SET_DISPLAY_TIME = 'SET_DISPLAY_TIME'
export const SET_ELEMENT_COUNT = 'SET_DISPLAY_TIME'

export function setLevel(level) {
    return { type: SET_LEVEL, payload: level }
}

export function setDisplayTime(displayTimeInS) {
    return { type: SET_DISPLAY_TIME, payload: displayTimeInS * 1000 }
}

export function setElementCount(elementCount) {
    return { type: SET_ELEMENT_COUNT, payload: elementCount }
}

export function setElementSelection(elements) {
    return { type: SET_ELEMENT_SELECTION, payload: elements }
}

export function selectElement(element) {
    return { type: SELECT_ELEMENT, payload: element }
}

export function unselectElement(element) {
    return { type: UNSELECT_ELEMENT, payload: element }
}