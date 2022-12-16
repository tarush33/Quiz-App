import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

const useStyles=makeStyles({
    root:{
        // border:'2px solid red',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f4f4f4',
        height:'100vh'
    },
    paper:{
        width:'600px',
        minWidth:'200px',
        margin:'24px',
        height:'428px',
    },
    head_style:{
        backgroundColor:'#f9f9f9'
    }   
})

const HighScores = () => {
    const allScores = useStoreState((state) => state.allScores)
    const classes=useStyles()
    console.log(allScores);
    return (
        <div className={classes.root}>
            <TableContainer component={Paper} className={classes.paper}>
                <Table stickyHeader>
                    <TableHead className={classes.head_style}>
                        <TableRow>
                            <TableCell align='center'>Day</TableCell>
                            <TableCell align='center'>Time</TableCell>
                            <TableCell align='center'>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allScores.map((score, index) => {
                                const day=score.time.split(' - ')[0],
                                      time=score.time.split(' - ')[1]
                                return (
                                    <TableRow>
                                        <TableCell
                                            align='center'
                                            key={index}
                                        >
                                            {day}
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                            key={index}
                                        >
                                            {time}
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                            key={index}
                                        >
                                            {score.score}
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default HighScores
