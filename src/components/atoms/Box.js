import React from 'react';
import styled from 'styled-components';

export default function Box(props) {

    const Box = styled.div`
    display: flex;
    margin: 1em;
    justify-content: center;
    align-items: center;
    width: 8em;
    height: 8em;
    padding: 10px;
    box-shadow: 5px 8px 5px #888888;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-weight: bold;

        &.large {
            -moz-transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -o-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);
        }

        &:nth-child(odd) {
            background: #00b2e3;
          }
          
        &:nth-child(even) {
            background: #44546A;
          }

        &:hover {
            -moz-transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -o-transform: scale(1.2);
            -ms-transform: scale(1.2);
            transform: scale(1.2);

            -webkit-transition: transform 0.3s ease-in-out;
            -moz-transition:transform 0.3s ease-in-out;
            -ms-transition:transform 0.3s ease-in-out;
        }
    `;

    const ItemText = styled.p`
    margin: 0px 10px 0px 10px;
    font-family: 'Agenda', san-serif;
    font-size: 1.3em;
    text-align: center;
    `;

    const { num, chosen, title, showAccordion } = props;
    
    return (
        <Box key={num} 
            className={chosen === num ? 'large' : ''}
            onClick={() => showAccordion(num)}>
            <ItemText>{title}</ItemText></Box>
    )
}
