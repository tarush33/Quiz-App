import './App.css';
import Timer from './Components/Timer';
import Appbar from './Components/Appbar';
import StartQuiz from './Components/StartQuiz';
import Question from './Components/Question';
import QuizEnd from './Components/QuizEnd';
import HighScores from './Components/HighScores';
import Home from './Components/Home'
import { useState } from 'react'
import { useStoreState,useStoreActions } from 'easy-peasy';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
const App=()=>{
  
  const getAllScores=useStoreActions((actions)=>actions.getAllScores)
  getAllScores()

  return (
    <BrowserRouter>
      <Appbar/> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/scores">
          <HighScores />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
