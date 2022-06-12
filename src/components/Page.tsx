import { useSongs } from "../hooks/useSongs"
import { Sequence } from "./Sequence"

export const Page = () => {

    const songs = useSongs()

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


