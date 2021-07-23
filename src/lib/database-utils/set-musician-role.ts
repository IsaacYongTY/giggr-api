import Musician from "../types/Musician";

export default function setMusicianRole(musician: any, role: string) : any{


    switch(role) {
        case "artist":
            musician.isArtist = true
            break;
        case "composer":
            musician.isComposer = true
            break;
        case "songwriter":
            musician.isSongwriter = true
            break;
        case "arranger":
            musician.isArranger = true
            break;
    }

    return musician
}