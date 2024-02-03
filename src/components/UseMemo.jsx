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
        <div  >
            <h2>Open console to see the changes or results</h2>
            <button onClick={() => setValue(value + 1)} style={{ margin: "10px", backgroundColor: "rgba(70,42,169,0.71)", color: "white", padding: "5px 10px",}}>Change dependency | {value}</button>
            <hr/>
            <button onClick={() => setValue2(value2 + 1)} style={{ margin: "10px", backgroundColor: "#a20b38", color: "white", padding: "5px 10px"}}>Click | {value2}</button>
        </div>
    );
}

export default UseMemo;