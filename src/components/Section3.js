import React, {useState} from 'react';
import { section2 } from '../data/faq';

export default function Section3(props) {

    console.log(props)
    const [toggle, setToggle] = useState(false);

    const toggleComponent = () => {
        setToggle(!toggle);
    }

    const createMarkup = (answer) => {
        return {__html: `${answer}`};
      }


    return (
        <div>
            <button className="accordion"
                onClick={() => toggleComponent()}>
                {props.question}
                {toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
            </button>
            <div className={`content-box ${toggle ? 'open' : 'close'}`}>
            <div dangerouslySetInnerHTML={createMarkup(props.answer)} />
            </div>
        </div>
    )
}
