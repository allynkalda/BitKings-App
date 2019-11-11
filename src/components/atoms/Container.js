import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: ${props => props.space ? props.space : '10em'};
    margin-right: ${props => props.space ? props.space : '10em'};
    padding-bottom: ${props => props.spaceBottom ? props.spaceBottom : '0px'};
`;

export default function Container({ children, space, spaceBottom }) {

    return (
        <ContainerDiv space={space} spaceBottom={spaceBottom}>
            { children }
        </ContainerDiv>
    )
}
