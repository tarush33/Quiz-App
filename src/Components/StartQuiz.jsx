import React,{ useState,useEffect } from 'react'
import { Typography, Card, CardContent, CardActions, Button, makeStyles } from '@material-ui/core'
import { useStoreState,useStoreActions } from 'easy-peasy';


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
    }
})

const StartQuiz = () => {

    const setStart=useStoreActions((actions)=>actions.setStart)
    const setTimeOver=useStoreActions((actions)=>actions.setTimeOver)
    const setCurrentQuestion=useStoreActions((actions)=>actions.setCurrentQuestion)
    const setScore=useStoreActions((actions)=>actions.setScore)
    const setOver=useStoreActions((actions)=>actions.setOver)

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant='h4' gutterBottom>
                        Coding Quiz Challange
                    </Typography>
                    <Typography>
                        Try to answer to following code-related 
                        questions within the time limit. 
                        Keep in mind that incorredt answers will 
                        penalize your score/time by ten seconds!
                    </Typography>
                    <br />
                </CardContent>
                <CardActions>
                    <Button 
                        variant='contained'
                        onClick={()=>{
                            setStart(true);
                            setTimeOver(false)
                            setCurrentQuestion(0)
                            setScore(0)
                            setOver(false)
                        }}
                    >
                        Start
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default StartQuiz
