const { getSongs, getOrCreateArtist, getOrCreateLanguage, userInputToSongCols, csvUserInputToSongCols} =  require('../lib/database-functions')


describe('getArtistId', () => {
    it('should create new artist if artist is not in database', () => {
        expect(getOrCreateArtist()).toBe(true)
    })
})