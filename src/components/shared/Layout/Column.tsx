import { Box, BoxProps } from '@mui/material';

export const Column = ({ children, sx, ...props }: BoxProps) =>
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            ...sx
        }}
        {...props}
    >
        {children}
    </Box>