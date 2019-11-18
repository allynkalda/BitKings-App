import React from 'react';
import styled from 'styled-components';
import { section1 } from 'data/faq.js';
import Title from 'components/atoms/Title'

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 0 1em 0 1em;
`;

const SubContainer = styled.div`
display: flex;
flex-direction: row;
`;

const CircleContainer = styled.div`
display:flex;
flex-direction: column;
width: 10vw;
`;

const Circle = styled.div`
position: relative;
border: 2px solid #00b2e3; 
border-radius: 100%; 
width: 1.7em; 
line-height: 1.7em; 
text-align: center; 
background-color: #fff; 
z-index: 2;
align-self: center;
font-size: 1.5em;
font-weight: bold;
`;

const Line = styled.div`
border-left: 2px solid #00b2e3;
height: 100%;
align-self: center;
`;

const LineLast = styled.div`
display:none;
`;

const Text = styled.div`
font-family: 'Gothic A1', sans-serif;
width: 70vw;
align-self: baseline;
text-align: left;

@media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const H3 = styled.h3`
    line-height: 0px;
`;

export default function Section1() {

    return (
            <Container>
                <Title title={`Everything you need to know about BitKings Exchange.`} />
                {
                    section1.map(item => {
                        return(
                        <SubContainer key={item.index}>
                            <CircleContainer>
                                <Circle>
                                <div className="step">{item.index}</div>
                                </Circle>
                                {item.index === section1.length ? <LineLast></LineLast> : <Line></Line>}
                            </CircleContainer>
                            <Text>
                                <H3>{item.title}</H3>
                                <p>{item.body}</p>
                            </Text>
                        </SubContainer>
                        )
                    })
                }
        </Container>

    )
}
