export function removeEmptyStringsFromArray(stringArray : string[]) : string[] {
    return stringArray.filter(str => str)
}

export default function convertNestedArraysToStringArray(nestedArr : string[][] | string[]) : string[] {
    const delimiter = /[,、]\s*/
    const flattenedArray = nestedArr.flat()
    if(!flattenedArray.length) return []

    let flattenedArrayWithValidValues = removeEmptyStringsFromArray(flattenedArray)

    return flattenedArrayWithValidValues.join(',').split(delimiter)

}