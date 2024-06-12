export default function accessImmutableObject(object, array) {
    let value = object;
    for (let i = 0; i < array.length; i++) {
        if (value === undefined) {
            return undefined;
        }
        value = value.get(array[i]);
    }
    return value;
}