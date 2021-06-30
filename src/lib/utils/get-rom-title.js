// @ts-ignore
import chineseToPinyin from 'chinese-to-pinyin'
import removeBrackets from './remove-brackets'

const capitalizeString = (romTitle) => romTitle.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')

export default function getRomTitle(title) {
    title = removeBrackets(title)
    let romTitle = chineseToPinyin(title, {removeTone: true})
    return capitalizeString(romTitle).replace(/,/g, ' ')

}
