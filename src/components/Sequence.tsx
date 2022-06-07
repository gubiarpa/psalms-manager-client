import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Container } from '@mui/system';

export const Sequence = () => {
    return (
        <Container
            maxWidth='sm'
        >
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={ songs }
                renderInput={(params) => <TextField { ...params } label="Canto" />}
            />
        </Container>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const songs = [
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
