import React,{ useState,useEffect } from 'react'
import { Typography, AppBar, Toolbar, Button, makeStyles } from '@material-ui/core'
import {
    Link,
    useLocation
} from "react-router-dom";
import { useStoreState,useStoreActions } from 'easy-peasy';
const useStyles = makeStyles({
    root: {
        display: 'flex',
        position:'fixed',
        width:'100vw',
        // opacity:0.5
    },
    leftcomponent: {
        // border:'2px solid red',
        textAlign:'start',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexGrow: 0.2,
        cursor:'pointer',
        height:'100%'
    },
    rightComponent:{
        // border:'2px solid red',
        flexGrow: 1,
        display:'flex',
        justifyContent:'flex-end',
        cursor:'pointer',
        alignItems:'center',
        height:'100%'
    },
    bar:{
        // backgroundColor:'#299617',
        backgroundColor:'blueviolet'
    },
    active:{
        // borderBottom:'2px solid white'
        fontWeight:'bold'
    },
})
const Appbar = () => {
    const classes = useStyles()
    const location=useLocation()

    const seconds=useStoreState((state)=>state.seconds)
    const timeOver=useStoreState((state)=>state.timeOver)
    const setSeconds=useStoreActions((actions)=>actions.setSeconds)
    const setTimeOver=useStoreActions((actions)=>actions.setTimeOver)
    const makeTimeUpBeforeFinish=useStoreActions(
        (actions)=>actions.makeTimeUpBeforeFinish
    )

    useEffect(()=>{
        let interval=null;
        if(!timeOver){
            interval=setInterval(()=>{
                setSeconds(seconds-1)
            },1000)
        }
        if(seconds===0){
            setTimeOver(true)
            clearInterval(interval)
            makeTimeUpBeforeFinish()
        }
        return ()=>clearInterval(interval)
    },[timeOver,seconds])

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <div className={classes.leftcomponent}>
                        <Typography>
                            <Link 
                                style={{
                                    color:'white',
                                    textDecoration:'none'
                                }}
                                className={location.pathname=='/'?classes.active:null} 
                                to='/'
                            >
                                Home
                            </Link>
                        </Typography>
                        <Typography>
                            <Link 
                                style={{
                                    color:'white',
                                    textDecoration:'none'
                                }}
                                className={location.pathname=='/scores'?classes.active:null} 
                                to='/scores'
                            >
                                Scores
                            </Link>
                        </Typography>
                    </div>
                    <div className={classes.rightComponent}>
                        <Typography>
                            {`Time Left - ${seconds} Secs`}
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Appbar
