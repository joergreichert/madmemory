export const roundOneObjects = (level, data) => {
    let wordCount;
    switch(level) {
        case 'medium': wordCount=10; break;
        case 'hard': wordCount=15; break;
        default: wordCount=5
    }
    return moveRandomSelectionToTarget(data, wordCount)
}

export const moveRandomSelectionToTarget = (sourceColl, targetCount) => {
    var moved = {selected: [], remaining: sourceColl}
    for (var i=0; i<targetCount; i++) {
        moved = moveRandomToTarget(moved)
    }
    return moved
}

const moveRandomToTarget = ({selected, remaining}) => {
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
}

export const roundTwoObjects = ({selected, remaining}) => {
    let wordCount = selected.length;
    var randomExtractIndex = Math.floor((Math.random() * wordCount));
    var randomInsertIndex = Math.floor((Math.random() * wordCount));
    var roundOneElement = selected[randomExtractIndex];
    var moved = {selected: [], remaining}
    for (var i=0; i<wordCount; i++) {
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