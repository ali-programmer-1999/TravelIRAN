import React from 'react'
import '../../Style/Sidebar.css'


function Sidebar(props) {
    return (
        <div className='_sidebar_ bg-light overflow-hidden' style={{ width: `${props.side_active}px` }}>
            <button onClick={props.sidebar_closer} className='btn fs-3'><i className="ri-close-line"></i></button>
            {props.children}
        </div>
    )
}

export default Sidebar