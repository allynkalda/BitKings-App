import React from 'react';
import Row from 'components/atoms/Row';
import styled from 'styled-components';


function Header({ headers, body, rowHeader, footer, colspan, multiline, table, switchColor, switchRow }) {
    const Table = styled.table`
        border-radius: 1em;
        overflow: hidden;
        margin-top: 1em;
        width:100%;
        border-collapse: collapse;
        color: black;
        background-color: #3D9AF1;
        box-shadow: 3px 3px 3px #888888
    `;

    const Th = styled.th`
        border-collapse: collapse;
        background-color: #F4F3EE;
        padding: 10px;

        &.blue-text {
            color: #00B2E3;
        }
        &.reverse-color {
            background-color: ${ switchRow ? 'white' : '#F4F3EE'};
        }
    `;

    const Td = styled.td`
        border-collapse: collapse;
        background-color: white;
        padding: 10px;
        font-size: 0.7em;
    `;

    const Tr = styled.tr`
        &:nth-child(odd) {
            background-color: #fff;
        }
        &:nth-child(even) {
            background-color: #F4F3EE;
        }
    `;



    const colorBlue = (index) => {
        if (table === 0 && switchColor) {
            if (index === 1) {
                return 'blue-text reverse-color';
             }
        }
        if (table === 3 && switchColor) {
            if (index > 0) {
            return 'blue-text reverse-color';
            }
        }
        if (switchColor) {
            return 'reverse-color';
        }
        if (table === 1) {
            console.log('table', table)
             if (index === 6) {
                return 'blue-text';
             }
        }
        if (table === 2) {
            console.log('table', table)
            if (index === 7) {
               return 'blue-text';
            }
       }
     }

    const createMarkup = (item) => {
        return {__html: `${item}`};
    }
    
    return (
        <Table>
            <thead>
            { rowHeader ? <Tr><Th 
                colSpan={colspan}>{rowHeader}</Th></Tr> : null }
            <Tr>
                { headers ? headers.map( (item, index) => {
                    return (
                        <Th key={index} 
                        className={colorBlue(index)}>{item}</Th>
                    )
                }) : null
                }
            </Tr>
            </thead>
            <tbody>
                {
                    body ? body.map((item, index) => {
                            return (
                            <Row id={item.id} key={index} item={item} multiline={multiline} parentIndex={index}
                            table={table} switchColor={switchColor}></Row>
                            )
                    }) : null
                }
                { footer ? <Tr><Td colSpan={colspan}><div dangerouslySetInnerHTML={createMarkup(footer)} /></Td></Tr> : null}
            </tbody>
        </Table>
    )
}

export default Header;