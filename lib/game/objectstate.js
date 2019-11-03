export const roundOneObjects = (level, data) => {
    let wordCount;
    switch(level) {
        case 'medium': wordCount=10; break;
        case 'hard': wordCount=15; break;
        default: wordCount=5
    }
    const roundOne = moveRandomSelectionToTarget(data, wordCount)
    return {
        selected: roundOne,
        remaining: data   
    }
}

export const moveRandomSelectionToTarget = (sourceColl, targetCount) => {
    const targetColl = []
    for (var i=0; i<targetCount; i++) {
        moveRandomToTarget(sourceColl, targetColl)
    }
    return targetColl
}

const moveRandomToTarget = (sourceColl, targetColl) => {
    var size = sourceColl.length
    var randomIndex = Math.floor((Math.random() * size));
    targetColl.push(sourceColl[randomIndex])
    sourceColl.splice(randomIndex, 1);    
}


export const roundTwoObjects = (roundOneObjects) => {
    let wordCount = roundOneObjects.selected.length;
    var randomExtractIndex = Math.floor((Math.random() * wordCount));
    var randomInsertIndex = Math.floor((Math.random() * wordCount));
    var roundOneElement = roundOneObjects.selected[randomExtractIndex];
    const roundTwo = []
    for (var i=0; i<wordCount; i++) {
        if (randomInsertIndex == i) {
            roundTwo.push(roundOneElement)
        } else {
            moveRandomToTarget(roundOneObjects.remaining, roundTwo)
        }
    }
    return {
        selected: roundTwo,
        duplicate: roundOneElement
    }    
}