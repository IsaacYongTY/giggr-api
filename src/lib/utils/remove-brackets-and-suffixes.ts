export default function removeBrackets(input : string) {
    const removeIndex = input.search(/[(（\-\[{]/g)

    return input.slice(0, removeIndex > -1 ? removeIndex : input.length).trim()
}
