import { List, Map } from 'immutable';

export default function concatElements(page1, page2) {
    // Convert arrays to Immutable Lists and concatenate them
    return List(page1).concat(List(page2));
}

// Function to merge two objects into a List
function mergeElements(page1, page2) {
    // Convert objects to Immutable Maps
    const map1 = Map(page1);
    const map2 = Map(page2);
    
    // Merge the two maps, with values from page2 taking precedence
    const mergedMap = map1.merge(map2);
    
    // Return the values of the merged map as a List
    return mergedMap.toList();
}
