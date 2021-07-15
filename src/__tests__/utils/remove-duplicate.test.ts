import removeDuplicateFromStringArray from "../../../src/lib/utils/remove-duplicates-from-string-array";

describe("removeDuplicate", () => {
    it("should return an array without duplicate elements", () => {
        expect(removeDuplicateFromStringArray(["Jay Chou", "JJ Lin", "Ronghao Li", "Jay Chou", "Jay Chou"]))
            .toStrictEqual(["Jay Chou", "JJ Lin", "Ronghao Li"])
        expect(removeDuplicateFromStringArray(["a", "b", "d", "d", "c"]))
            .toStrictEqual(["a", "b", "d", "c"])
        expect(removeDuplicateFromStringArray([]))
            .toStrictEqual([])
    })
})