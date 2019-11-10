import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
&:nth-child(odd) {
    background-color: ${props => props.switchColor ? '#F4F3EE' : '#fff'};
}
&:nth-child(even) {
    background-color: ${props => props.switchColor ? '#fff' : '#F4F3EE'};
}
text-align: center;
font-size: 0.85em;
`;

const Td = styled.td`
padding: 10px;
border-collapse: collapse;

    &.blue-text {
        color: #00B2E3;
    }
`;


function Row({ item, multiline, parentIndex, table, switchColor }) {

    const eachItem = item ? Object.values(item) : null;

    const createMarkup = (answer) => {
        return {__html: `${answer}`};
      }

    const checkIfMultiline = (index, item) => {
        if (index === 2 && multiline) {
            return <div dangerouslySetInnerHTML={createMarkup(item)} />
        } return item
    }

    const colorBlue = (index) => {
       if (table === 1) {
            if (parentIndex === 6 && index < 6) {
               return 'blue-text'
            }
            if (parentIndex < 6 && index === 6) {
                return 'blue-text'
            }
       }
       if (table === 2) {
            if (parentIndex === 6 && index < 7) {
            return 'blue-text'
            }
            if (parentIndex < 6 && index === 7) {
            return 'blue-text'
         }
       }
       else {
           return '';
       }
    }
    
    return (
        <Tr switchColor>
            {   
                eachItem ?
                eachItem.map((item, index) => {
                    return (
                        <Td key={index} className={colorBlue(index)}
                        >{checkIfMultiline(index, item)}</Td>
                    )
                }) : null
            }
        </Tr>
    )
}

export default Row;