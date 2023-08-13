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

import { useState } from 'react';

export default function Header() {
    const [city, setCity] = useState('Выберите ваш город')
    return (
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
                        <p>8 (800) 600-27-59</p>
                        <p>8 (495) 213-32-30</p>
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
    );
};