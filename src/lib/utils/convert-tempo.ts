export default function convertTempo(spotifyTempo : number, spotifyTime : number) {

  if (spotifyTime === 3) {
    spotifyTempo = spotifyTempo * 2 / spotifyTime
  }
  
  return `${Math.round(spotifyTempo)}`
}
