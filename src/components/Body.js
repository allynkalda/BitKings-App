import React from 'react'
import Header from 'components/atoms/Header'

export default function Body({ headers, rowHeader, body, footer, colspan, multiline, table, switchColor, switchRow}) {
    return (
        <div>
            <Header headers={headers} rowHeader={rowHeader}
                body={body} footer={footer} colspan={colspan} multiline={multiline}
                table={table} switchColor={switchColor} switchRow={switchRow}
                > </Header>
        </div>
    )
}
