import React from 'react'

interface PureComponent02Props {
    onClick: ()=>void
}
function PureComponent02({onClick}:PureComponent02Props) {
    console.log("render PureComponent02")
    return (
        <>
            <h2>PureComponent02</h2>
            <button onClick={onClick}>Click</button>
        </>
    )
}

const pureComp  = React.memo(PureComponent02)
export default pureComp