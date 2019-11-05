import React from 'react';
import styled from 'styled-components';

export default function Title(props) {

    const Title = styled.h1`
    text-align: center;
    font-size: 1.8em;
    padding-bottom: 0.7em;
    font-family: 'Agenda', san-serif;
    `;

    const { title } = props;
    return (
        <Title>{title}</Title>
    )
}
