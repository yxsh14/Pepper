import React from 'react'
import {TiTick} from 'react-icons/ti'
const Ticks = ({val,col}) => {
    return (
        <div id='tickBox'>
            <div className="icon" style={{background:col}}>
                <TiTick />
            </div>
            <div className="word">{val}</div>
        </div>
    )
}

export default Ticks