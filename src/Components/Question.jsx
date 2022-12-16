import React, { useState } from 'react'
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useStoreState,useStoreActions } from 'easy-peasy';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#f4f4f4",
        // border: 2px solid black,
        padding: 0,
        margin: 0,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    grid: {
        // border: "2px solid red",
        height: "60%"
    },
    bigbox: {
        width: "50vw",
        minWidth: "250px"
    },
    paper: {
        padding: "10px"
    },
    option: {
        padding: "8px",
        backgroundColor: "#f4f4f4",
        borderRadius: "5px",
        color: "#858585"
    },
    question: {
        // border: "2px solid red",
        height: "30%",
        color: "#858585"
    },
    foot: {
        height: "5%",
        textAlign: "end",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
        // border: "2px solid red"
    },
    status: {
        color: '#858585',
        fontWeight:'bold'
    },
    btn: {
        color: "#858585"
    },
    btn2: {
        width: "100%",
        height: "100%",
        color: "#858585",
        textAlign: "end",
        backgroundColor: "#f4f4f4",
        "&:hover": {
            backgroundColor: "#f4f4f4"
        }
    }
});
const Question = ({ question }) => {
    const { questionText, options, answer } = question
    const [locked, setLocked] = useState(false)
    const [ans,setAns]=useState('')

    const classes = useStyles();

    const currentQuestion=useStoreState((state)=>state.currentQuestion)
    const questions=useStoreState((store)=>store.questions)
    const score=useStoreState((store)=>store.score)

    const setOver=useStoreActions((actions)=>actions.setOver)
    const setCurrentQuestion=useStoreActions((actions)=>actions.setCurrentQuestion)
    const setScore=useStoreActions((actions)=>actions.setScore)

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3} className={classes.bigbox}>
                    <Grid item xs={12} className={classes.question}>
                        <Typography variant="h6" component="p" style={{ color: "black" }}>
                            Question - {currentQuestion+1}
                        </Typography>
                        <Typography component="p">
                            {questionText}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.grid}>
                        <Grid container spacing={2}>
                            {
                                options.map((option,index)=>{
                                    return(
                                        <Grid key={index} item xs={12} sm={6}>
                                            <Button  
                                                disabled={locked} 
                                                variant="contained" 
                                                onClick={()=>{
                                                    setLocked(true)
                                                    setAns(option)
                                                    if(option===answer){
                                                        setScore(score+1)
                                                    }
                                                }} 
                                                className={classes.btn2}
                                            >
                                                {option}
                                            </Button>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.foot}>
                        <div 
                            className={classes.status}
                        >{ans===''?'Status':ans===answer?'Correct':'Wrong'}</div>
                        <Button 
                            className={classes.btn}
                            onClick={()=>{
                                if(currentQuestion<questions.length-1){
                                    setCurrentQuestion(currentQuestion+1)
                                }else{
                                    setOver(true)
                                    setCurrentQuestion(0)
                                }
                                setLocked(false)
                                setAns('')
                            }}
                        >
                            Next Page
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Question
