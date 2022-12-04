import React from 'react'
import '../../Style/Page_title_section.css'

function Page_title(props) {
    return (
        <section className='_Page_title_'>
            <div className='_page_title_content_'>
                <h1 className='display-3 text-light'>{props.page_title}</h1>
            </div>
        </section>
    )
}

export default Page_title