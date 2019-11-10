import React from 'react';
import styled from 'styled-components';

export default function Container({ children, space, spaceBottom }) {

    const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-left: ${space ? space : '10em'};
    padding-right: ${space ? space : '10em'};
    padding-bottom: ${spaceBottom ? spaceBottom : '0px'};
    `;

    return (
        <Container>
            { children }
        </Container>
    )
}
