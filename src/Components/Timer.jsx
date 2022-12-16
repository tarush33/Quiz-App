import React, { useState } from 'react'

const Timer = () => {
    const arr=[
        {x:12,y:45},
        {x:34,y:78},
        {x:27,y:49}
    ]
    
    return(
        <div>
            <button 
                onClick={()=>{
                    localStorage.removeItem('arr')
                    // localStorage.setItem('arr',JSON.stringify(arr))

                    const d=new Date();
                    
                    var year=d.getFullYear(),
                        month=d.getMonth(),
                        day=d.getDate(),
                        hour=d.getHours(),
                        minute=d.getMinutes()

                    const months=[
                        'Jan','Feb','March',
                        'Apr','May','June',
                        'Jul','Aug','Sept',
                        'Oct','Nov','Dec'
                    ]
                    const index=`${months[month]} ${day},${year} - ${hour}:${minute}`
                    console.log(index);
                }}
            >
                Click
            </button>
        </div>
    )
}

export default Timer
