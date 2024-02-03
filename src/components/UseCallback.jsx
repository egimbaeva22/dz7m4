import React, {useCallback, useState} from 'react';

function UseCallback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("Memoed callback")
        setCount(prevCount => prevCount + 1);
    }, [count]);

    const decrement = useCallback(() => {
        console.log("Memoed callback")
        setCount(prevCount => prevCount - 1);
    }, [count]);

    return (
        <div style={{backgroundColor: "#95bdd3", height:"100px", width:"300px"}}>
            <p style={{color:"black"}}>Count | {count}</p>
            <button onClick={increment} style={{ margin: "10px", backgroundColor: "rgba(70,42,169,0.71)", color: "white", padding: "5px 10px",}}>Increment</button>
            <button onClick={decrement} style={{ margin: "10px", backgroundColor: "#a20b38", color: "white", padding: "5px 10px"}}>Decrement</button>
        </div>
    );
}

export default UseCallback;