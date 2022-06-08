import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Container } from '@mui/system';

export interface Song {
    id: number,
    name: string
}

export interface SequenceProps {
    name: string,
    songs: Song[]
}

export const Sequence = ({name, songs}: SequenceProps) => {
    return (
        <Container
            maxWidth='sm'
        >
            <div className=''>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    sx={{ m: 4 }}
                    options={ songs.map(s => s.name) }
                    renderInput={(params) => <TextField { ...params } label={name} />}
                />
            </div>
        </Container>
    );
}
/*
const songsDummy = [
    { label: 'A la víctima pascual' },
    { label: 'A nadie demos ocasión de tropiezo' },
    { label: 'A ti levanto mis ojos' },
    { label: 'A ti, Señor, en mi clamor imploro' },
    { label: 'A ti, Señor, levanto mi alma' },
    { label: 'A ti, Señor, se debe la alabanza en Sión' },
    { label: 'Abraham' },
    { label: 'Aclamad al Señor' },
    { label: 'Al despertar' },
    { label: 'Alabad al Señor en el cielo' },
    { label: 'Alegría, ha nacido el salvador' },
    { label: 'Aleluya, alabad al Señor' },
    { label: 'Aleluya, bendecid al Señor' },
    { label: 'Aleluya, ya llegó el reino' },
];
*/