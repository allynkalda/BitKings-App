import React, {useState} from 'react';
import Title from './atoms/Title';
import Box from '../components/atoms/Box';
import { pricing } from '../data/pricing'
import { animateScroll as scroll } from 'react-scroll'
import Container from './atoms/Container';

export default function Pricing() {
    
    const [show, setShow] = useState(null);
    const [chosen, setChosen] = useState(null);

    const showAccordion = (num) => {
        setShow(true);
        setChosen(num);
        scroll.scrollToBottom();
    }

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
        </>
    )
}
