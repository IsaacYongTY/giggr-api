export default function removeDuplicate(strArray: string[]) : string[] {
    return Array.from(new Set(strArray))
}