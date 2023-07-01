import React from "react";
import "./styles/Header.css";
import { Close } from '@mui/icons-material';
const Header = () => {
    return (
    <div class="header">
        <div class="header__logo">
            <h1>Sameh ben amor</h1>
            </div>
            <nav>
                <ul>
                    <div className="closed">
                        <Close className="close" />
                    </div>
                </ul>
            </nav>
        
    </div>
    )
}
export default Header