import { TextField } from '@mui/material';

interface MeterProps {
    meter: string
    changeMeter: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void
}

export const Meter = ({ meter, changeMeter }: MeterProps) => (
    <TextField
        variant='standard'
        value={meter}
        onChange={changeMeter}
        autoComplete='off'
        sx={{ width: 60 }}
        placeholder='Metre'
        InputProps={{ sx: { fontSize: 20 } }}
        inputProps={{ sx: { textAlign: 'center' } }} />
);