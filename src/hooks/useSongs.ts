import { useEffect, useState } from "react"
import { Song } from "../components/Sequence";
import { getPsalms } from "../services/getPsalms";

export const useSongs = () => {

    const [state, setState] = useState<Song[]>([]);

    useEffect(() => {
        getPsalms()
            .then(songs => { setState(songs) })
    }, [])

    return state
}
