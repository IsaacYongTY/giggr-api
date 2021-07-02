import convertCommaSeparatedStringToArray from "../../lib/utils/convert-comma-separated-string-to-array";

describe("convertCommaSeparatedStringToArray", ( )=> {

    it("should be working",() => {
        expect(convertCommaSeparatedStringToArray('pop, metal, funk')).toStrictEqual(['pop', 'metal', 'funk'])
        expect(convertCommaSeparatedStringToArray('pop')).toStrictEqual(['pop'])
        expect(convertCommaSeparatedStringToArray('khalil fong, david tao, jay chou'))
            .toStrictEqual(['khalil fong', 'david tao', 'jay chou'])
        expect(convertCommaSeparatedStringToArray('方大同、陶喆、 周杰伦'))
            .toStrictEqual(['方大同', '陶喆', '周杰伦'])
    })

    it("should return empty array if it contains empty string",() => {
        expect(convertCommaSeparatedStringToArray('')).toStrictEqual([])

    })


})