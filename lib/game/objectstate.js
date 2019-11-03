export const roundOneObjects = (level, data) => {
    let wordCount;
    switch(level) {
        case 'medium': wordCount=10; break;
        case 'hard': wordCount=15; break;
        default: wordCount=5
    }
    const roundOne = []
    for (var i=0; i<wordCount; i++) {
        var size = data.length
        var randomIndex = Math.floor((Math.random() * size));
        roundOne.push(data[randomIndex])
        data.splice(randomIndex, 1);    
    }
    return {
        selected: roundOne,
        remaining: data   
    }
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
            var size = roundOneObjects.remaining.length
            var randomIndex = Math.floor((Math.random() * size));
            roundTwo.push(roundOneObjects.remaining[randomIndex])
            roundOneObjects.remaining.splice(randomIndex, 1);        
        }
    }
    return {
        selected: roundTwo,
        duplicate: roundOneElement
    }    
}