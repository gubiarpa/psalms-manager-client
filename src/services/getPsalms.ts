import { Song } from "../models/Song";

export const getPsalms = async() : Promise<Song[]> => {

    const url = `https://resucito-manager.herokuapp.com/api/psalm?from=0&limit=222`
    const resp = await fetch(url)
    const { psalms }  = await resp.json()

    const songs : Song[] = psalms;

    return songs
}