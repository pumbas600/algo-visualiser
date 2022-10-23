import { AppBar, Box, Button, Toolbar } from '@mui/material';

interface HeaderProps {
    currentPage: number;
    buttonFunctions: any;
}

export default function Header({ currentPage, buttonFunctions }: HeaderProps) {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <div />
                    {currentPage === 0 ? (
                        <Box>
                            <Button onClick={buttonFunctions.stackClicked} color="inherit" sx={{ marginRight: "30px"}}>Stack</Button>
                            <Button onClick={buttonFunctions.queueClicked} color="inherit" sx={{ marginRight: "30px"}}>Queue</Button>
                            <Button onClick={buttonFunctions.linkedListClicked} color="inherit" sx={{ marginRight: "32px"}}>Linked List</Button>
                            <Button onClick={buttonFunctions.binaryHeapClicked} color="inherit" sx={{ marginRight: "30px"}}>Binary Heap</Button>
                            <Button onClick={buttonFunctions.graphClicked} color="inherit">Graph</Button>
                        </Box>
                    ) : currentPage === 1 ? (
                        <Box>
                            <Button onClick={buttonFunctions.selectionSortClicked} color="inherit" sx={{ marginRight: "30px"}}>Selection Sort</Button>
                            <Button onClick={buttonFunctions.insertionSortClicked} color="inherit" sx={{ marginRight: "30px"}}>Insertion Sort</Button>
                            <Button onClick={buttonFunctions.shellSortClicked} color="inherit" sx={{ marginRight: "32px"}}>Shell Sort</Button>
                            <Button onClick={buttonFunctions.mergeSortClicked} color="inherit" sx={{ marginRight: "30px"}}>Mergesort</Button>
                            <Button onClick={buttonFunctions.quickSortClicked} color="inherit" sx={{ marginRight: "30px"}}>Quicksort</Button>
                            <Button onClick={buttonFunctions.topologicalSortClicked} color="inherit" sx={{ marginRight: "30px"}}>Topological Sort</Button>
                            <Button onClick={buttonFunctions.heapSortClicked} color="inherit">Heapsort</Button>
                        </Box>
                    ) : currentPage === 2 ? (
                        <Box>
                            <Button onClick={buttonFunctions.quickSelectClicked} color="inherit" sx={{ marginRight: "30px"}}>Quickselect</Button>
                            <Button onClick={buttonFunctions.dfsClicked} color="inherit" sx={{ marginRight: "30px"}}>DFS</Button>
                            <Button onClick={buttonFunctions.bfsClicked} color="inherit" sx={{ marginRight: "32px"}}>BFS</Button>
                            <Button onClick={buttonFunctions.pfsClicked} color="inherit" sx={{ marginRight: "30px"}}>PFS</Button>
                            <Button onClick={buttonFunctions.binarySearchClicked} color="inherit">Binary Search</Button>
                        </Box>
                    ) : currentPage === 3 ? (
                        <Box>
                            <Button onClick={buttonFunctions.dijkstraClicked} color="inherit" sx={{ marginRight: "30px"}}>Dijkstra</Button>
                            <Button onClick={buttonFunctions.bellmanFordClicked} color="inherit" sx={{ marginRight: "30px"}}>Bellman-Ford</Button>
                            <Button onClick={buttonFunctions.primClicked} color="inherit" sx={{ marginRight: "30px"}}>Prim</Button>
                            <Button onClick={buttonFunctions.kruskalClicked} color="inherit" sx={{ marginRight: "32px"}}>Kruskal</Button>
                            <Button onClick={buttonFunctions.floydClicked} color="inherit">Floyd</Button>
                        </Box>
                    ) : (<div></div>)}
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}