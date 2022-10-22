import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Header() {
    const theme = useTheme();
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <div />
                    <Button color="inherit">Test</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}