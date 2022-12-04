import React from 'react'

function Cover_title(props) {
    document.title = 'Travel : ' + props.title
    return (
        <div>{props.children}</div>
    )
}

export default Cover_title