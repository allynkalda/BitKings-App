import React, {useState} from 'react';
import styled from 'styled-components';
import { section2 } from '../data/faq';
import Section3 from './Section3';

export default function Section2() {

    const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 30px;
    `;

    const Box = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15vw;
        height: 15vh;
        box-shadow: 5px 8px 5px #888888;
        border-radius: 5px;
        color: white;
        cursor: pointer;

        &:nth-child(odd) {
            background: #00b2e3;
          }
          
        &:nth-child(even) {
            background: #44546A;
          }

        &:hover {
            -moz-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            -o-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);

            -webkit-transition: transform 0.3s ease-in-out;
            -moz-transition:transform 0.3s ease-in-out;
            -ms-transition:transform 0.3s ease-in-out;
        }
    `;

    const [show, setShow] = useState(false);

    const showAccordion = () => {
        setShow(!show)
    }

    return (
        <div>
            <Container>
                {
                    section2 && section2.map(item => {
                        return (
                            <Box onClick={() => showAccordion()}><p>{item.title}</p></Box>
                        )
                    })
                }
            </Container>
                {
                    show ? (
                        section2.map((item) => {
                            const question = item.questions;
                            return (
                                <Section3 question={question}></Section3>
                            )
                        })
                    ) : null
                }
        </div>
    )
}
