import React from 'react';
import styled from 'styled-components';

export default function Container({ children }) {

    const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0px 10em 0px 10em;
    `;

    return (
        <Container>
            { children }
        </Container>
    )
}
