export default function convertCommaSeparatedStringToArray(str : string) : string[] {
    if(!str) return []

    let delimiter = /[,、]\s*/
    return str.split(delimiter)
}