import React from 'react'
import Navbar from '../components/Navbar'
import iPage from '../interfaces/page'
import"../style/pages/LandingPage.scss"

export const LandingPage : React.FunctionComponent<iPage> = (props) => {
    console.log(props);
    
    return (
        <div className="home_container" >
            <Navbar/>
            <div className="home_wrapper">
                <h1>Hello</h1>
            </div>
        </div>
    )
}
