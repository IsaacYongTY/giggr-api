import SpotifyWebApi from "spotify-web-api-node";

export async function getDataFromSpotify(trackId: string) {

    const spotifyApi = new SpotifyWebApi({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    })

    const code = await spotifyApi.clientCredentialsGrant()
    await spotifyApi.setAccessToken(code.body.access_token)

    let data = await spotifyApi.getAudioFeaturesForTrack(trackId)
    const trackInfo = await spotifyApi.getTrack(trackId)

    return { audioFeatures: data.body, singleTrack: trackInfo.body}
}
