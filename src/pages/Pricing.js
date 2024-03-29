import React, {useState} from 'react';
import TitleText from 'components/atoms/Title';
import Box from 'components/atoms/Box';
import { pricing, description } from 'data/pricing'
import { animateScroll as scroll } from 'react-scroll'
import Container from 'components/atoms/Container';
import Body from 'components/Body';
import styled from 'styled-components';


const Text = styled.p`
    line-height: 1.5em;
    padding: 1em 0em 1em 0em;
`;

export default function Pricing() {
    
    const [show, setShow] = useState(null);
    const [chosen, setChosen] = useState(null);

    const showAccordion = (num) => {
        setShow(true);
        setChosen(num);
        scroll.scrollToBottom();
    }

    const description1 = pricing[0].body;
    const headers1 = Object.keys(pricing[0].table[0]);
    const rowHeader1 = pricing[0].header;
    const body1 = pricing[0].table;
    const footer1 = pricing[0].footer;

    const headers2 = Object.keys(pricing[1].table1[0]);
    const rowHeader2 = pricing[1].headers[0].header;
    const body2 = pricing[1].table1;

    const headers3 = Object.keys(pricing[1].table2[0]);
    const rowHeader3 = pricing[1].headers[1].header;
    const body3 = pricing[1].table2;
    const footer3 = pricing[1].footer;

   const headers4 = Object.keys(pricing[2].table[0]);
   const rowHeader4 = pricing[2].header;
   const body4 = pricing[2].table;

   const showTables = () => {
    if (show) {
        if (chosen === 0) {
            return (
                <>
                <Text>{description1}</Text>
                <Body headers={headers1} colspan={"2"} rowHeader={rowHeader1} body={body1} footer={footer1} 
                    table={0} switchColor={true} switchRow={true}></Body>
                </>
            )
        };
        if (chosen === 1) {
            return (
                <Container space={'0px'}>
                <Text>{rowHeader2}</Text>
                <Body headers={headers2} colspan={"7"} body={body2} table={1}></Body>
                <Text>{rowHeader3}</Text>
                <Body headers={headers3} colspan={"8"} body={body3} table={2}></Body>
                <Text>{footer3}</Text>
                </Container>
            )
        };
        if (chosen === 2) {
            return (
                <>
                <Body headers={headers4} colspan={"3"} rowHeader={rowHeader4} body={body4} 
                    multiline={true} table={3} switchColor={true} switchRow={true}></Body>
                </>
            )
        }
    }
   }

    return (
        <>
        <TitleText title={`BitKings Exchange Fees`} />
        <Container space={'15em'} spaceBottom={'3em'}>
            <Text>{description.text}</Text>
                {
                    pricing && pricing.map(item => {
                        const num = item.index;
                        const title = item.title;
                        return (
                            <Box key={num} num={num} showAccordion={showAccordion}
                                width={'12em'} height={'11.5em'} fontsize={'1.8em'}
                                chosen={chosen} title={title} />
                        )
                    })
                }
        </Container>
        <Container space={'10em'} spaceBottom={'3em'}>
        { showTables() }
        </Container>
        </>
    )
}
