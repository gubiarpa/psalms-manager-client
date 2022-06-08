import { Sequence } from "./Sequence"

export const Page = () => {

    return (
        <>
            {
                sequences.map(sequence => {
                    return <Sequence key={sequence.id} name={sequence.name} songs={songs} />
                })
            }
        </>
    )
}

const sequences = [
    { id: 1, name: 'Entrada'},
    { id: 2, name: 'Respuesta 1'},
    { id: 3, name: 'Respuesta 2'},
    { id: 4, name: 'Respuesta 3'},
    { id: 5, name: 'Paz'},
    { id: 6, name: 'Salida'},
];

const songs = [
    { id: 1, name: 'A la víctima pascual' },
    { id: 2, name: 'A nadie demos ocasión de tropiezo' },
    { id: 3, name: 'A ti levanto mis ojos' },
    { id: 4, name: 'A ti, Señor, en mi clamor imploro' },
    { id: 5, name: 'A ti, Señor, levanto mi alma' },
    { id: 6, name: 'A ti, Señor, se debe la alabanza en Sión' },
    { id: 7, name: 'Abraham' },
    { id: 8, name: 'Aclamad al Señor' },
    { id: 9, name: 'Al despertar' },
    { id: 10, name: 'Alabad al Señor en el cielo' },
    { id: 11, name: 'Alegría, ha nacido el salvador' },
    { id: 12, name: 'Aleluya, alabad al Señor' },
    { id: 13, name: 'Aleluya, bendecid al Señor' },
    { id: 14, name: 'Aleluya, ya llegó el reino' },
];
