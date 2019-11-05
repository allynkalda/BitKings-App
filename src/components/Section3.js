import React, {useState} from 'react';
import styled from 'styled-components';

const Accordion = styled.button`
    border: none;
    background: white;
    border-bottom: 0.5px solid rgb(199, 197, 197);
    cursor: pointer;
    padding: 18px;
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
    outline: 0;
    width: 55vw;
    font-family: 'Gothic A1', sans-serif;
`;

const ContentBox = styled.div`
    width: 70vw;
    line-height: 200%;
`;

const Arrow = styled.span`
    float: right;
    padding-left: 1em;
`;

export default function Section3(props) {

    const [toggle, setToggle] = useState(false);    

    const toggleFalse = () => {
        if (toggle === true) {
        setToggle(false);
        }
    }

    const [oldChosen, setOldChosen] = useState(false); 

    React.useEffect(() => {
        setOldChosen(props.chosen)
        console.log(props.chosen)
        console.log(oldChosen)
        if (oldChosen !== props.chosen) {
            setToggle(false);
        }
    })


    const toggleComponent = () => {
        setToggle(!toggle);
    }

    const createMarkup = (answer) => {
        return {__html: `${answer}`};
      }

    return (
        <div>
            <Accordion
                onClick={() => toggleComponent()}>
                {props.question}
                {toggle ? <Arrow>&#9650;</Arrow> : <Arrow>&#9660;</Arrow>}
            </Accordion>
            <ContentBox className={`${toggle ? 'open' : 'close'}`}>
            <div dangerouslySetInnerHTML={createMarkup(props.answer)} />
            </ContentBox>
        </div>
    )
}
