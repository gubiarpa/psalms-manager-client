import { useEffect, useState } from "react"
import { Sequence, Song } from "./Sequence"

export const Page = () => {

    const [songs, setSongs] = useState<Song[]>([])

    useEffect(() => {
        getPsalms()
    }, [])

    const getPsalms = async() => {
        const url = `https://resucito-manager.herokuapp.com/api/psalm?from=0&limit=222`
        const resp = await fetch(url)
        const { psalms } = await resp.json()
        setSongs(psalms.map( (psalm: any) => ({ uid: psalm.uid, name: psalm.name }) ))
    }

    return (
        <>
            {
                sequences.map(sequence => {
                    return <Sequence key={sequence.uid} name={sequence.name} songs={songs} />
                })
            }
        </>
    )
}

const sequences = [
    { uid: 1, name: 'Entrada'},
    { uid: 2, name: 'Respuesta 1'},
    { uid: 3, name: 'Respuesta 2'},
    { uid: 4, name: 'Respuesta 3'},
    { uid: 5, name: 'Paz'},
    { uid: 6, name: 'Salida'},
];


