import React, { forwardRef, useImperativeHandle } from 'react'

function UseRef(props, ref) {

    useImperativeHandle(ref,()=>{
        return {
            getValue:()=>"Hello from ref"
        }
    })
    return (
        <div>UseRef</div>
    )
}

// export default forwardRef(UseRef)
export default UseRef