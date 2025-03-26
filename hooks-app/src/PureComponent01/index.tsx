import React from 'react'

interface PureComponent01Props {
    name: string
}
function PureComponent01({ name }: PureComponent01Props) {
    console.log("render PureComponent01",name)
    return (
        <>
            <h2>PureComponent01</h2>
            Hello {name}
        </>
    )
}

const pureComp  = React.memo(PureComponent01)
export default pureComp