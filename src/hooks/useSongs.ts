import { useEffect, useState } from "react"
import { Song } from "../components/Sequence";
import { getPsalms } from "../services/getPsalms";

export const useSongs = () => {

    const [state, setState] = useState<Song[]>([]);

    useEffect(() => {
        const psalms = getPsalms()
            .then(songs => { setState(songs) })
    }, [])

    return state
}
