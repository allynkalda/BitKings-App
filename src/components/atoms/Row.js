import React from 'react';
import styled from 'styled-components';

function Row({ item, id }) {

    const Tr = styled.tr`
        &:nth-child(odd) {
            background-color: #fff;
        }
        &:nth-child(even) {
            background-color: #F4F3EE;
        }
    `;

    const Td = styled.td`
        padding: 10px;
        border: 1px solid #ccc;
        border-collapse: collapse;
    `;


    const eachItem = item ? Object.values(item) : null;
    
    return (
        <Tr className={`row-${id}`}>
            {   
                eachItem ?
                eachItem.map((item, index) => {
                    return (
                        <Td key={index}>{item}</Td>
                    )
                }) : null
            }
        </Tr>
    )
}

export default Row;