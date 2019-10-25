import React, {useState} from 'react';
import styled from 'styled-components';

const Accordion = styled.button`
border: none;
background: white;
border-bottom: 0.5px solid rgb(199, 197, 197);
width: 100vh;
cursor: pointer;
padding: 18px;
text-align: left;
font-size: 1.2rem;
font-weight: bold;
outline: 0;
`;

const ContentBox = styled.div`
  .open {
    display: block;
    height: auto;
    border-bottom: 0.5px solid rgb(199, 197, 197);
    padding: 18px;
  }
  
  .close {
    display: none;
  }
`;

export default function Section3(props) {

    const Arrow = styled.span`
        float: right;
    `;

    const [toggle, setToggle] = useState(false);

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
