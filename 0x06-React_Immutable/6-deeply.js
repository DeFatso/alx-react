const { Map, List } = require('immutable');

function mergeDeeplyElements(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);
    const mergedMap = map1.mergeDeep(map2);
    return List(mergedMap.values());
}