const { getSongs, getArtistId, getLanguageId, userInputToSongCols, csvUserInputToSongCols} =  require('../lib/database-functions')

describe('getArtistId', () => {
    it('should create new artist if artist is not in database', () => {
        expect(getArtistId).toBe(true)
    })
})