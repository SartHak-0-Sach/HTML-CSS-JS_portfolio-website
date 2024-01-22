import React from 'react'
import Home from '../../pages/Home/Home'
const Layout = () => {
    return (
        <>
            <div className="sidebar-section">
                <div className="sidebar">
                    <div className="sidebar-toggle-icons">
                        icon
                    </div>
                </div>
                <div className="container">
                    <Home />
                </div>
            </div>
        </>
    )
}

export default Layout
