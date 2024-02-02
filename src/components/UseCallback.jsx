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
        <div>
            <p>Count | {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default UseCallback;