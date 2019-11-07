import React, {useState} from 'react';
import Title from './atoms/Title';
import Box from '../components/atoms/Box';
import { pricing } from '../data/pricing'
import { animateScroll as scroll } from 'react-scroll'
import Container from './atoms/Container';
import Body from './Body'

export default function Pricing() {
    
    const [show, setShow] = useState(null);
    const [chosen, setChosen] = useState(null);

    const showAccordion = (num) => {
        setShow(true);
        setChosen(num);
        scroll.scrollToBottom();
    }

    console.log(pricing)

    const headers1 = Object.keys(pricing[0].table[0]);
    const rowHeader1 = pricing[0].header;
    const body1 = pricing[0].table;
    const footer1 = pricing[0].footer;


    const headers2 = Object.keys(pricing[1].table1[0]);
    const rowHeader2 = pricing[1].headers[0].header;
   // const body2 = pricing[0].table;
   // const footer2 = pricing[0].footer;
   console.log(rowHeader2)
    return (
        <>
        <Title title={`BitKings Exchange Fees`} />
        <Container>
                {
                    pricing && pricing.map(item => {
                        const num = item.index;
                        const title = item.title;
                        return (
                            <Box key={num} num={num} showAccordion={showAccordion}
                                width={'10em'} height={'8em'}
                                chosen={chosen} title={title} />
                        )
                    })
                }
        </Container>
        <Container>
        <Body headers={headers1} colspan={"2"} rowHeader={rowHeader1} body={body1} footer={footer1}></Body>
        <Body headers={headers2} colspan={"7"} rowHeader={rowHeader2}></Body>
        </Container>
        </>
    )
}
