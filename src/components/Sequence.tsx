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
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                sx={{ m: 4 }}
                options={ songs.map(s => s.name) }
                renderInput={(params) => <TextField { ...params } label={name} />}
            />
        </Container>
    );
}