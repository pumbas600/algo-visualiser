import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Header({ currentPage }: { currentPage: number }) {
    const theme = useTheme();
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <div />
                    {currentPage === 0 ? (
                        <Button color="inherit">Data Structures</Button>
                    ) : currentPage === 1 ? (
                        <Button color="inherit">Sorting</Button>
                    ) : currentPage === 2 ? (
                        <Button color="inherit">Searching</Button>
                    ) : currentPage === 3 ? (
                        <Button color="inherit">Graph Traversal</Button>
                    ) : (<div></div>)}
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}