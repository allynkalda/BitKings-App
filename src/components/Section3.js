import React, {useState} from 'react';

export default function Section3(props) {

    console.log(props)
    const [toggle, setToggle] = useState(false);

    const toggleComponent = () => {
        toggle = setToggle(!toggle);
    }

    return (
        <div>
            <button class="accordion"
                onClick={() => toggleComponent()}>
                {toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
            </button>
            <div class={`content-box ${toggle ? 'open' : 'close'}`}>
                <p></p>
            </div>
        </div>
    )
}
