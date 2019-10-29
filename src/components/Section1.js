import React from 'react';
import styled from 'styled-components';
import { section1 } from '../data/faq.js';

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 3em;
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
width: 2em; 
line-height: 2em; 
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
width: 70vw;
align-self: baseline;
text-align: left;
margin-top: -10px;
margin-bottom: 20px;

@media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const Title = styled.h1`
    padding-bottom: 20px;
    font-family: 'Agenda', san-serif;
`;

export default function Section1() {

    return (
            <Container>
                <Title>Everything you need to know about BitKings Exchange.</Title>
                {
                    section1.map(item => {
                        return(
                        <SubContainer key={item.index}>
                            <CircleContainer>
                                <Circle>
                                <div className="step">{item.index}</div>
                                </Circle>
                                {item.index == section1.length ? <LineLast></LineLast> : <Line></Line>}
                            </CircleContainer>
                            <Text>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </Text>
                        </SubContainer>
                        )
                    })
                }
        </Container>

    )
}
