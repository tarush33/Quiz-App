import { createStore, action, thunk } from 'easy-peasy'
const store = {
    questions: [
        {
            questionText: "Commonly used data types DO NOT include:",
            options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
            answer: "3. alerts",
        },
        {
            questionText: "Arrays in JavaScript can be used to store ______.",
            options: [
                "1. numbers and strings",
                "2. other arrays",
                "3. booleans",
                "4. all of the above",
            ],
            answer: "4. all of the above",
        },
        {
            questionText:
                "String values must be enclosed within _____ when being assigned to variables.",
            options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
            answer: "3. quotes",
        },
        {
            questionText:
                "A very useful tool used during development and debugging for printing content to the debugger is:",
            options: [
                "1. JavaScript",
                "2. terminal/bash",
                "3. for loops",
                "4. console.log",
            ],
            answer: "4. console.log",
        },
        {
            questionText:
                "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
            options: ["1. break", "2. stop", "3. halt", "4. exit"],
            answer: "1. break",
        }
    ],
    start: false,
    over: false,
    currentQuestion: 0,
    score: 0,
    seconds: 10,
    timeOver:true,
    timeUpBeforeFinish:false,
    allScores: [],

    //actions
    setStart: action((state, value) => {
        state.start = value;
    }),
    setOver: action((state, value) => {
        state.over = value;
    }),
    setCurrentQuestion: action((state, value) => {
        state.currentQuestion = value;
    }),
    setScore: action((state, value) => {
        state.score = value
    }),
    getAllScores:action((state)=>{
        if(!localStorage.getItem('AllScores'))localStorage.setItem('AllScores',JSON.stringify([]))
        const previousScores = JSON.parse(localStorage.getItem('AllScores'))
        state.allScores=[...previousScores]
    }),
    addNewScore: action((state) => {
        const d = new Date();

        const year = d.getFullYear(),
            month = d.getMonth(),
            day = d.getDate(),
            hour = d.getHours(),
            minute = d.getMinutes(),
            second=d.getSeconds()

        const months = [
            'Jan', 'Feb', 'March',
            'Apr', 'May', 'June',
            'Jul', 'Aug', 'Sept',
            'Oct', 'Nov', 'Dec'
        ]
        const time_now = `${months[month]} ${day},${year} - ${hour}:${minute}:${second}`
        const new_item = { time: time_now, score: state.score }
        state.allScores = [new_item, ...state.allScores]
        localStorage.setItem('AllScores',JSON.stringify(state.allScores))
    }),
    setSeconds:action((state,payload)=>{
        state.seconds=payload
    }),
    setTimeOver:action((state,payload)=>{
        state.timeOver=payload;
    }),
    reset:action((state)=>{
        state.seconds=10
        state.timeOver=true
        state.timeUpBeforeFinish=false
    }),
    makeTimeUpBeforeFinish:action((state)=>{
        state.timeUpBeforeFinish=true
    })
}

const Store = createStore(store)
export default Store