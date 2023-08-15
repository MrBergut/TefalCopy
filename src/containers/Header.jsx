import Button from '../components/Button';
import Icon from '../components/Icon';

import '../styles/header.css';
import point from '../assets/images/point.svg';
import logo from '../assets/images/logo.svg';
import qu from '../assets/images/qu.svg';
import search from '../assets/images/search.svg';
import login from '../assets/images/login.svg';
import statistic from '../assets/images/statistic.svg';
import favorite from '../assets/images/favorite.svg';
import basket from '../assets/images/basket.svg';
import phone from '../assets/images/phone.svg'

import { useState } from 'react';

export default function Header() {
    const [city, setCity] = useState('Выберите ваш город')
    return (
        <>
            <header>
                <div className='headerbar'>
                    <div className='location'>
                        <img src={point} alt='point' />
                        <p>{city}</p>
                    </div>
                    <div className='centername'><p>Официальный магазин Tefal</p></div>
                    <div className='compainesandshops'>
                        <p>О компании</p>
                        <p>О магазине</p>
                    </div>
                </div>
                <div className='header'>
                    <div className='buttonandnumbers'>
                        <Button type='catalog'>
                            <img src={qu} alt='icon' width='20px' height='20px'/>
                            <p>Каталог</p>
                        </Button>
                        <div className='phonenumbers'>
                            <div className='hotlinesite'>
                            <svg width='12px' height='12px' class="MuiBox-root css-1pbfw3m" cursor="pointer" fill="none" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M14.175 10.3167C13.15 10.3167 12.1583 10.15 11.2333 9.85C10.9417 9.75 10.6167 9.825 10.3917 10.05L9.08333 11.6917C6.725 10.5667 4.51667 8.44167 3.34167 6L4.96667 4.61667C5.19167 4.38333 5.25833 4.05833 5.16667 3.76667C4.85833 2.84167 4.7 1.85 4.7 0.825C4.7 0.375 4.325 0 3.875 0H0.991667C0.541667 0 0 0.2 0 0.825C0 8.56667 6.44167 15 14.175 15C14.7667 15 15 14.475 15 14.0167V11.1417C15 10.6917 14.625 10.3167 14.175 10.3167Z" fill="currentColor"></path></svg><p>8 (800) 600-27-59</p>
                            </div>
                            <div className='hotlinebrand'>
                            <svg width='12px' height='12px' class="MuiBox-root css-1pbfw3m" cursor="pointer" fill="none" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M14.175 10.3167C13.15 10.3167 12.1583 10.15 11.2333 9.85C10.9417 9.75 10.6167 9.825 10.3917 10.05L9.08333 11.6917C6.725 10.5667 4.51667 8.44167 3.34167 6L4.96667 4.61667C5.19167 4.38333 5.25833 4.05833 5.16667 3.76667C4.85833 2.84167 4.7 1.85 4.7 0.825C4.7 0.375 4.325 0 3.875 0H0.991667C0.541667 0 0 0.2 0 0.825C0 8.56667 6.44167 15 14.175 15C14.7667 15 15 14.475 15 14.0167V11.1417C15 10.6917 14.625 10.3167 14.175 10.3167Z" fill="currentColor"></path></svg><p>8 (495) 213-32-30</p>
                            </div>
                        </div>
                    </div>
                    <div className='logo'>
                        <img src={logo} alt='logo' width='120px' height='26px'/>
                    </div>
                    <div className='headericons'>
                        <Icon src={search} />
                        <Icon src={login} />
                        <Icon src={statistic} />
                        <Icon src={favorite} />
                        <Icon src={basket} />
                    </div>
                </div>
            </header>
        </>
    );
};