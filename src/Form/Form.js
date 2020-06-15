import React from 'react';
import LoginRouting from '../components/Routing/LoginRouting'
import HomeButton from "../components/Routing/HomeButton"

export default function Form() {
    return (
        <>
            <div className="header">
                    <LoginRouting/>
                <div className="register_home_btn_container">
                    <HomeButton/>
                </div>
            </div>
            <>form</>
        </>
    )
}
