import React from 'react'
import Logo from '../Imgs/justdial-logo.png';
import Langimg from '../Imgs/language_sign.png';
import megaphone from '../Imgs/megaphone.png';
import graph from '../Imgs/line-chart.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navmain'>
            <div className='nav_logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='nav_content'>
                <ul>
                    <li>
                        <img className='langimg nav_icon' src={Langimg} alt='Language' />
                        <span>Language</span>
                    </li>
                    <li><a href="#">We are Hiring</a></li>
                    <li><a href="#">invester relation</a></li>
                    <li>
                        <img className='megaphone nav_icon' src={megaphone} alt='.' />
                        <a href="#">Advertise</a>
                    </li>
                    <li>
                        <img className='graph nav_icon' src= {graph} alt='.' />
                        <a href="#">Free Listning</a>
                    </li>
                    <li>
                        <img  className="nav_icon"src='https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/notify_icon.svg' alt=''/>
                        <a href='#'>Login/Signup</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
