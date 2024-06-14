// Import Immutable.js
import { List, Map } from 'immutable';

// Function to concatenate two arrays into a List
function concatElements(page1, page2) {
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

// Example usage:
const page1Array = [1, 2, 3];
const page2Array = [4, 5, 6];

const page1Object = { a: 1, b: 2, c: 3 };
const page2Object = { b: 20, d: 4 };

console.log(concatElements(page1Array, page2Array)); // List [ 1, 2, 3, 4, 5, 6 ]
console.log(mergeElements(page1Object, page2Object)); // List [ 1, 20, 3, 4 ]
