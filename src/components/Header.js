import { useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {

    const [btnName, setBtnName] = useState('Login')

    return (<div className='header'>
        <div className='header-logo-container'><img className='header-logo' src={LOGO_URL}></img>
        </div>
        <div className='header-nav-items'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li>Cart</li>
                <li><button className='btn-login' onClick={() => { btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login') }}>{btnName}</button></li>
            </ul>

        </div>
    </div>)
}

export default Header