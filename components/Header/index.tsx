import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Header({ currentPage }: { currentPage: number }) {
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
                        <Box>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Selection Sort</Button>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Insertion Sort</Button>
                            <Button color="inherit" sx={{ marginRight: "32px"}}>Shell Sort</Button>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Mergesort</Button>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Quicksort</Button>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Topological Sort</Button>
                            <Button color="inherit">Heapsort</Button>
                        </Box>
                    ) : currentPage === 2 ? (
                        <Box>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Quickselect</Button>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>DFS</Button>
                            <Button color="inherit" sx={{ marginRight: "32px"}}>BFS</Button>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>PFS</Button>
                            <Button color="inherit">Binary Search</Button>
                        </Box>
                    ) : currentPage === 3 ? (
                        <Box>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Dijkstra</Button>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Bellman-Ford</Button>
                            <Button color="inherit" sx={{ marginRight: "32px"}}>Floyd</Button>
                            <Button color="inherit" sx={{ marginRight: "30px"}}>Prim</Button>
                            <Button color="inherit">Kruskal</Button>
                        </Box>
                    ) : (<div></div>)}
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}