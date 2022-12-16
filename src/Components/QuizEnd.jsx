import React from 'react'
import { Typography, Card, CardContent, CardActions, Button, makeStyles } from '@material-ui/core'
import { useStoreState,useStoreActions } from 'easy-peasy';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        // border:'2px solid red',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4'
    },
    card: {
        // border:'2px solid red',
        width:'40%',
        minWidth: '250px',
        padding: '8px',
        textAlign: 'start'
    },
    secondary:{
        color:'#858585'
    },
    bold:{
        fontWeight:'bold'
    }
})
const QuizEnd = () => {
    const classes=useStyles()
    const score=useStoreState((state)=>state.score)
    const addNewScore=useStoreActions((state)=>state.addNewScore)
    const start=useStoreState((state)=>state.start)
    const setStart=useStoreActions((actions)=>actions.setStart)
    const reset=useStoreActions((actions)=>actions.reset)
    const setCurrentQuestion=useStoreActions((actions)=>actions.setCurrentQuestion)

    const history = useHistory();

    const saveScore=()=>{
        reset()
        addNewScore()
        history.push("/scores");
        setStart(!start)
        setCurrentQuestion(0)
    }
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant='h4' gutterBottom>
                        All Done!
                    </Typography>
                    <Typography component='p' className={classes.secondary} gutterBottom>
                        Enter your initials to save your score to the local storage.
                    </Typography>
                    <Typography variant='h6'>
                        Score: {score}/5
                    </Typography>
                    <br />
                </CardContent>
                <CardActions>
                    <Button variant='contained' onClick={saveScore}>
                        save
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default QuizEnd
