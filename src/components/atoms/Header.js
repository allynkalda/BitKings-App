import React from 'react';
import Row from './Row';
import styled from 'styled-components';

const Table = styled.table`
    margin-top: 4em;
    width:100%;
    border: 1px solid #ccc;
    border-collapse: collapse;
    color: black;
    background-color: #3D9AF1;
`;

const Th = styled.th`
    border: 1px solid #ccc;
    border-collapse: collapse;
    color: white;
    background-color: #3D9AF1;
    padding: 10px;
`;

const Td = styled.th`
    border: 1px solid #ccc;
    border-collapse: collapse;
    color: white;
    background-color: #3D9AF1;
    padding: 10px;
`;

const Tr = styled.tr`
    &:nth-child(odd) {
        background-color: #fff;
      }
    &:nth-child(even) {
        background-color: #F4F3EE;
      }
`;

function Header({ headers, body, rowHeader, footer, colspan }) {
    
    return (
        <Table>
            <thead>
                { rowHeader ? <Tr><Th colSpan={colspan}>{rowHeader}</Th></Tr> : null }
            <Tr>
                { headers ? headers.map( (item, index) => {
                    return (
                        <Th key={index}>{item}</Th>
                    )
                }) : null
                }
            </Tr>
            </thead>
            <tbody>
                {
                    body ? body.map((item, index) => {
                            return (
                            <Row id={item.id} key={index} item={item}></Row>
                            )
                    }) : null
                }
                { rowHeader ? <Tr><Td colSpan={colspan}>{footer}</Td></Tr> : null}
            </tbody>
        </Table>
    )
}

export default Header;