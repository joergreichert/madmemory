export const rheinischesWoerterbuch = {
  key: 'rheinisch',
  source: {
    'label': 'Rheinisches Mitmachwörterbuch (LVR-Institut für Landeskunde und Regionalgeschichte)',
    'url': 'https://codingdavinci.de/daten/#lvr-institut-fur-landeskunde-und-regionalgeschichte'
  },
  data: 'rheinisch.json'
}

export const saechsischesWoerterbuch = {
  key: 'saechsisch',
  source: {
    label: 'Sächsisches Wörterbuch von A bis Z. (sachsenwelt.de)',
    url: 'http://www.sachsenwelt.de/sachsen/mundart/woerterbuch-a.html'
  },
  data: 'saechsisch.json'
}

export const lwlSoundArchiv = {
  key: 'sounds',
  source: {
    label: 'Sound-Archiv "Work with Sounds"/"Sounds of Changes" (LWL-Industriemuseum)',
    url: 'https://codingdavinci.de/daten/#lwl-industriemuseum'
  },
  data: 'sounds.json'
}

export const selectableElements = [
  rheinischesWoerterbuch, saechsischesWoerterbuch, lwlSoundArchiv
];

export const EASY_LEVEL = {
  key: 'easy',
  label: 'Leicht',
  settings: {
    selectedLevel: 'easy',
    elementCount: 5,
    displayTime: 6000, // 6 sec
  }
}
export const MEDIUM_LEVEL = {
  key: 'medium',
  label: 'Mittel',
  settings: {
    selectedLevel: 'medium',
    elementCount: 10,
    displayTime: 5000, // 5 sec
  }
}

export const HARD_LEVEL = {
  key: 'hard',
  label: 'Schwer',
  settings: {
    selectedLevel: 'hard',
    elementCount: 20,
    displayTime: 3000, // 3 sec
  }
}

export const selectableLevels = [EASY_LEVEL, MEDIUM_LEVEL, HARD_LEVEL]

export const levelSettings = (level) => {
  switch (level) {
    case EASY_LEVEL.key: return EASY_LEVEL.settings
    case MEDIUM_LEVEL.key: return MEDIUM_LEVEL.settings
    case HARD_LEVEL.key: return HARD_LEVEL.settings
  }
}

const listWithout = (list, element) => {
  const index = list.indexOf(element)
  if (index >= 0) {
    list.splice(index, 1)
  }
  return list;
}

const listWith = (list, element) => {
  const index = list.indexOf(element)
  if (index === -1) {
    list.push(element)
  }
  return list;
}

export const elementSelection = (currentSelection, element) =>
  elementHandler(currentSelection, element, listWith)

export const elementUnselection = (currentSelection, element) =>
  elementHandler(currentSelection, element, listWithout)

const elementHandler = (currentSelection, element, handlerFun) => {
  const selectedElements = handlerFun(currentSelection, element);
  return {
    selectedElements,
    objects: selectableElements
      .filter(elem => selectedElements.indexOf(elem.key) >= 0)
      .map(elem => elem.data)
  }
}