import React, { useState } from "react";
import "./styles/Header.css";
import  AccessAlarmIcon  from '@mui/icons-material/AccessAlarm';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Link } from "react-router-dom";
const Header = () => {
    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active)
    }
    return (
    <div class="header">
        <div class="header__logo">
            <h1>Sameh ben amor</h1>
            </div>
            <nav>
                <ul>
                    <div className="closed">
                        <AccessAlarmIcon className="close" onClick={showMenu} />
                    </div>
                    <li>
                        <Link to = "/" >
                            <b>Home</b>
                        </Link>
                    </li>
                    <li>
                        <Link to = "/" >
                        <b>About</b>
                        </Link>
                    </li>
                    <li>
                        <Link to = "/" >
                        <b> Portfolio</b>
                        </Link>
                    </li>
                    <li>
                        <Link to = "/" >
                        <b>Blog</b>
                        </Link>
                    </li>
                    <li>
                        <Link to = "/" >
                        <b>Contact</b>
                        </Link>
                    </li>

                </ul>
            </nav>
            <div className="Changer">
                <MenuBookOutlinedIcon className="Menu" />
            </div>
    </div>
    )
}
export default Header