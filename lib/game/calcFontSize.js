const fontSizePx = 12
const fontSizePxMax = 72
const letterCountFactor = 6

export default ({text, dimensions}) => {
  const textLen = text ? text.length : 0
  const currentSize = textLen * letterCountFactor
  const fontSizeFactor = 2 / Math.log1p(textLen)
  let targetFontSize = fontSizePx;
  let counter = 1
  while (currentSize + (counter * currentSize * fontSizeFactor) < dimensions.width) {
    counter++
    if (targetFontSize >= fontSizePxMax) {
      break;
    }
    targetFontSize += counter
  }
  return targetFontSize;
}