export const roundOneObjects = ({ settings, data }) => {
  return moveRandomSelectionToTarget(data, settings.elementCount)
}

export const moveRandomSelectionToTarget = (sourceColl, targetCount) => {
  var moved = { selected: [], remaining: sourceColl }
  for (var i = 0; i < targetCount; i++) {
    moved = moveRandomToTarget(moved)
  }
  return moved
}

const moveRandomToTarget = ({ selected, remaining }) => {
  if (remaining.length > 0) {
    var size = remaining.length
    var randomIndex = Math.floor((Math.random() * size));
    var newSelected = [...selected]
    newSelected.push(remaining[randomIndex])
    var newRemaining = [...remaining]
    newRemaining.splice(randomIndex, 1)
    return {
      selected: newSelected,
      remaining: newRemaining
    }
  } else {
    return {
      selected: [],
      remaining: []
    }
  }
}

export const roundTwoObjects = ({ selected, remaining }) => {
  let elementCount = selected.length;
  var randomExtractIndex = Math.floor((Math.random() * elementCount));
  var randomInsertIndex = Math.floor((Math.random() * elementCount));
  var roundOneElement = selected[randomExtractIndex];
  var moved = { selected: [], remaining }
  for (var i = 0; i < elementCount; i++) {
    if (randomInsertIndex == i) {
      moved.selected.push(roundOneElement)
    } else {
      moved = moveRandomToTarget(moved)
    }
  }
  return {
    selected: moved.selected,
    duplicate: roundOneElement
  }
}