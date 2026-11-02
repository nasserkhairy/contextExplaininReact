import React, { createContext, useState } from 'react'



export const CounterContextObj = createContext();


// controlle shared data
export default function CounterContext({ children }) {


    // data to share
    const [counter, setCounter] = useState(10);

    function increaseCounter() {
        setCounter(counter + 1)
    }


    function decreaseCounter() {
        setCounter(counter - 1)
    }


    return (
        <>

            <CounterContextObj.Provider value={{
                // counter : counter ,
                counter,
                dec :decreaseCounter ,
                inc :increaseCounter,
                
            }} >

                {children}

            </CounterContextObj.Provider>





        </>
    )
}
