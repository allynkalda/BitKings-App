import React from 'react';
import styled from 'styled-components';

const TitleText = styled.h1`
    text-align: center;
    font-size: 1.8em;
    padding-bottom: 0.7em;
    font-family: 'Agenda', san-serif;
`;

export default function Title(props) {

    const { title } = props;
    return (
        <TitleText>{title}</TitleText>
    )
}
