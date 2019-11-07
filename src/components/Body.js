import React from 'react'
import Header from './atoms/Header'

export default function Body({ headers, rowHeader, body, footer, colspan }) {
    return (
        <div>
            <Header headers={headers} rowHeader={rowHeader}
                body={body} footer={footer} colspan={colspan}> </Header>
            
        </div>
    )
}
