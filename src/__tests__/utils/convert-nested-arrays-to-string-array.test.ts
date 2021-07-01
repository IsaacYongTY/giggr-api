import convertNestedArraysToStringArray from "../../lib/utils/convert-nested-arrays-to-string-array";

describe("The function that converts nested arrays to string arrays", () => {
    it("should return a string array", () => {
        expect(convertNestedArraysToStringArray([[], []])).toBe([])
        // expect(convertNestedArraysToStringArray([["name1", "name2"], ["name3"]])).toBe([])
    })
})