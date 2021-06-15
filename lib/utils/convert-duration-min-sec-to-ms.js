function convertDurationMinSecToMs(durationMinSec) {

    if(!durationMinSec.includes(':')) return
    if(durationMinSec.split(':')[1].length !== 2) return

    let [min, sec] = durationMinSec.split(':').map(element => parseInt(element))

    if(sec >= 60) return

    return (min * 60 + sec) * 1000
}

module.exports = convertDurationMinSecToMs