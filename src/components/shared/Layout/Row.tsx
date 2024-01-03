import { Box, BoxProps } from '@mui/material';

export const Row = ({ children, sx, ...props }: BoxProps) =>
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            ...sx
        }}
        {...props}
    >
        {children}
    </Box>