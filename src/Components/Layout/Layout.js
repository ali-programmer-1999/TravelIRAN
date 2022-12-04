import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Router from '../Routers/Router'
function Layout() {

    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    )
}

export default Layout