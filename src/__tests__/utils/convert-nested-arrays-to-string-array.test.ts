import convertNestedArraysToStringArray, { removeEmptyStringsFromArray } from "../../lib/utils/convert-nested-arrays-to-string-array";


describe("The function that converts nested arrays to string arrays", () => {
    it("should return a string array", () => {

        expect(convertNestedArraysToStringArray([["name1", "name2"], ["name3"]]))
            .toStrictEqual(['name1' , 'name2', 'name3'])
        expect(convertNestedArraysToStringArray([["name1, name2", "name3"], ["name4"]]))
            .toStrictEqual(['name1' , 'name2', 'name3', "name4"])

        expect(convertNestedArraysToStringArray([
                ["Joe Satriani, Steve Vai, Yngwie Malmsteen", "Andy Timmons"],
                ["Slash,Kirk  Hammett"],
                ["Slash", "John Petrucci"]
            ]))
            .toStrictEqual(['Joe Satriani' , 'Steve Vai', 'Yngwie Malmsteen', "Andy Timmons",
                "Slash", "Kirk  Hammett", "Slash", "John Petrucci"
            ])
        expect(convertNestedArraysToStringArray([["name1"], ["name2"], ["name3"]]))
            .toStrictEqual(['name1' , 'name2', 'name3'])
        expect(convertNestedArraysToStringArray([["name1", "name2", "name3"]]))
            .toStrictEqual(['name1' , 'name2', 'name3'])
        expect(convertNestedArraysToStringArray(["name1", "name2", "name3"]))
            .toStrictEqual(['name1' , 'name2', 'name3'])
    })

    it("should remove empty string inside the nested arrays", () => {
        expect(convertNestedArraysToStringArray([["name1, name2", ""], ["name3"]]))
            .toStrictEqual(['name1' , 'name2', 'name3'])
        expect(convertNestedArraysToStringArray([["name1, name2", ""], [""]]))
            .toStrictEqual(['name1' , 'name2'])
    })

    it("should return an empty array if empty array(s) is/are provided", () => {
        expect(convertNestedArraysToStringArray([[], []])).toStrictEqual([])
        expect(convertNestedArraysToStringArray([[]])).toStrictEqual([])
        expect(convertNestedArraysToStringArray([])).toStrictEqual([])
    })

    describe("removeEmptyStringsFromArray",() => {
        it("should remove all falsy value and empty string", () => {
            expect(removeEmptyStringsFromArray(["one", "two", "", "three"])).toStrictEqual(["one", "two", "three"])
            expect(removeEmptyStringsFromArray(["one", "two", "", ""])).toStrictEqual(["one", "two"])
        })

        it("should return the same array if there is no empty string", () => {
            expect(removeEmptyStringsFromArray(["one", "two"])).toStrictEqual(["one", "two"])
            expect(removeEmptyStringsFromArray([])).toStrictEqual([])
        })
    })
})