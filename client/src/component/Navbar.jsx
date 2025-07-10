import React from "react";

const Navbar = () => {
    return(
        <div className="w-full flex justify-between h-20 items-center">
            <div className="w-[10%] h-full">
                <h1>LOGO</h1>
            </div>
            <div className="w-[50%] h-full">
                <ul className="w-full h-full flex gap-6 list-none items-center">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;