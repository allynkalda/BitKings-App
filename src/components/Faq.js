import React from 'react';
import styled from 'styled-components';
import Section1 from './Section1';
import Section2 from './Section2';

const MainContainer = styled.div`
    padding: 20px;
`;

export default function Faq() {

    return (
        <MainContainer>
            <Section1></Section1>
            <Section2></Section2>
        </MainContainer>
    )
}
