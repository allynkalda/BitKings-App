import React, {useState} from 'react';
import styled from 'styled-components';
import { section2 } from '../data/faq';
import Section3 from './Section3';
import { animateScroll as scroll } from 'react-scroll'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0px 10em 0px 10em;
    `;

const Box = styled.div`
    display: flex;
    margin: 1em;
    justify-content: center;
    align-items: center;
    width: 8em;
    height: 8em;
    padding: 10px;
    box-shadow: 5px 8px 5px #888888;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-weight: bold;

        &.large {
            -moz-transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -o-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);
        }

        &:nth-child(odd) {
            background: #00b2e3;
          }
          
        &:nth-child(even) {
            background: #44546A;
          }

        &:hover {
            -moz-transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -o-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);

            -webkit-transition: transform 0.3s ease-in-out;
            -moz-transition:transform 0.3s ease-in-out;
            -ms-transition:transform 0.3s ease-in-out;
        }
    `;

const ItemText = styled.p`
    margin: 0px 10px 0px 10px;
    font-family: 'Agenda', san-serif;
    font-size: 1.3em;
    text-align: center;
`;

const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 4em 8em 0px 9em; 
    `;

export default function Section2() {

    const [show, setShow] = useState(null);
    const [chosen, setChosen] = useState(null);

    const showAccordion = (num) => {
        setShow(true);
        setChosen(num);
        scroll.scrollToBottom();
    }

    return (
        <div>
            <Container>
                {
                    section2 && section2.map(item => {
                        const num = item.index
                        return (
                            <Box key={item.index} 
                            className={chosen === num ? 'large' : ''}
                            onClick={() => showAccordion(num)}>
                            <ItemText>{item.title}</ItemText></Box>
                        )
                    })
                }
            </Container>
            <AccordionContainer>
                {
                    show ? (
                        section2[chosen] && section2[chosen].qa.map((qa, index) => {
                            return (
                                <Section3 key={index} index={index} 
                                    answer={qa.answer}
                                    question={qa.question}></Section3>
                            )
                        })
                    ) : null
                }
            </AccordionContainer>
        </div>
    )
}
