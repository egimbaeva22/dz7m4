import {useMemo, useState} from 'react';

function UseMemo() {
    const [value, setValue] = useState(0)
    const [value2, setValue2] = useState(0)

    useMemo(() => {
        console.log("Use Memo")
    }, [value]);

    function rendered() {
        console.log("Отрисовался!")
    }

    rendered()

    return (
        <>
            <h1>Open console to see the changes or results</h1>
            <button onClick={() => setValue(value + 1)}>Change dependency | {value}</button>
            <hr/>
            <button onClick={() => setValue2(value2 + 1)}>Click | {value2}</button>
        </>
    );
}

export default UseMemo;