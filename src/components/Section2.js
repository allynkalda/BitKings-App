import React, {useState} from 'react';
import styled from 'styled-components';
import { section2 } from '../data/faq';
import Section3 from './Section3';
import { animateScroll as scroll } from 'react-scroll'
import Box from './atoms/Box';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0px 10em 0px 10em;
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

    const question = section2[chosen] && section2[chosen].qa;

    console.log(section2)
    return (
        <div>
            <Container>
                {
                    section2 && section2.map(item => {
                        const num = item.index;
                        const title = item.title;
                        return (
                            <Box key={num} num={num} showAccordion={showAccordion}
                                chosen={chosen} title={title} />
                        )
                    })
                }
            </Container>
            <AccordionContainer>
                {
                    show ? (
                        question.map((qa, index) => {
                            return (
                                <Section3 key={index} index={index} 
                                    answer={qa.answer} chosen={chosen}
                                    question={qa.question}></Section3>
                            )
                        })
                    ) : null
                }
            </AccordionContainer>
        </div>
    )
}
