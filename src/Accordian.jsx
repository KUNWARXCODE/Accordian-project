import { useState } from "react";
import data from "./data"
function Accordian() {
    const [butt, setButt] = useState('single-selection')
    const [multiple, setMultiple] = useState([])
    const [select, setSelect] = useState(null)
    function single(currid) {

        setSelect(currid === select ? null : currid)
    }
    function multiply(currid) {
        let copyMulti = [...multiple];
        const curridindex = copyMulti.indexOf(currid)
        console.log(curridindex)
        curridindex === -1 ? copyMulti.push(currid) : copyMulti.splice(curridindex, 1)

        setMultiple(copyMulti)


    }
    function changebutt() {
        setButt(butt === 'single-selection' ? 'multi-selection' : 'single-selection')

    }
    console.log(setMultiple, multiple)
    return <>

        <div>
            <button onClick={changebutt}>{butt}</button>
            {data.map((item) => (
                <div>
                    <h2>{item.id}:
                        {item.question}</h2>

                    <span onClick={butt === 'single-selection' ? () =>
                        single(item.id) : () => multiply(item.id)}>+
                    </span>
                    <div>{
                        multiple.indexOf(item.id) !== -1 ? item.answer : select === item.id && item.answer
                    }
                    </div>
                </div>

            ))}</div>


    </>

}
export default Accordian;