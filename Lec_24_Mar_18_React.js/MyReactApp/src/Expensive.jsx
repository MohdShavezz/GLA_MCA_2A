import React, { useCallback, useEffect, useMemo, useState } from 'react'

const Expensive = () => {

    const [num, setNum] = useState(10)
    const [theme, setTheme] = useState('light')

    function calSum(num) { //expensive funciton
        console.log('fn...')
        let sum
        for (let i = 0; i < 1000000000; i++) {
        }
        return num * 2
    }

    useMemo(()=>{
        return calSum(num) //200
    },[num])
    // console.log(calSum(num))
    
    // useCallback(()=>{
    //     funcToMemoize()        
    // },[])




function handleChangeTheme(){
    if(theme==='light'){
        setTheme('dark')
    }else(
        setTheme('light')
    )
}

    return (
        <div>
            Expensive
            <p>Number: {num}</p>
            <p>Theme: {theme}</p>
            <button onClick={()=>setNum(num+1)}>Num++</button>
            <button onClick={handleChangeTheme}>ToggleTheme</button>

        </div>
    )
}

export default React.memo(Expensive)
