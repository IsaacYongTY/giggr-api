// @ts-ignore
import chineseToPinyin from 'chinese-to-pinyin'

const capitalizeString = (romTitle : string) => romTitle.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')

export function removeBrackets(input : string) {
    const removeIndex = input.search(/\(|（|-/g)

    return input.slice(0, removeIndex > -1 ? removeIndex : input.length).trim()
}

export default function getRomTitle(title : string) {
    title = removeBrackets(title)
    let romTitle = chineseToPinyin(title, {removeTone: true})
    return capitalizeString(romTitle).replace(/,/g, ' ')

}
