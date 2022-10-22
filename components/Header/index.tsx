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
                        <Box>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Stack</Button>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Queue</Button>
                            <Button color="inherit" sx={{ marginRight: "32px"}}>Linked List</Button>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Binary Heap</Button>
                            <Button color="inherit">Graph</Button>
                        </Box>
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